import time

import cv2
import PoseModule
import numpy as np


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        self.detector = PoseModule.PoseDetector(upBody=True)
        self.nodeJoints = [
            [13, 11, 23],
            [15, 13, 11],
            [14, 12, 24],
            [16, 14, 12],
            [11, 23, 25],
            [23, 25, 27],
            [25, 27, 31],
            [12, 24, 26],
            [24, 26, 28],
            [26, 28, 32],
        ]
        self.instance_angles = [0] * 10
        self.pTime = 0

    def __del__(self):
        self.video.release()
        self.video = None

    def get_frame(self):
        success, img = self.video.read()
        img = self.detector.findPose(img)
        lm_list = self.detector.findPosition(img, draw=False)
        if len(lm_list) != 0:
            for i in range(len(self.nodeJoints)):
                self.instance_angles[i] = (self.detector.findAngle(img, self.nodeJoints[i][0],
                                                                   self.nodeJoints[i][1], self.nodeJoints[i][2], True,
                                                                   True))
        c_time = time.time()
        fps = 1 / (c_time - self.pTime)
        self.pTime = c_time

        cv2.putText(img, str(int(fps)), (70, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        success, jpeg = cv2.imencode('.jpg', img)
        return jpeg.tobytes()


class CurlCounter(object):
    def __init__(self, right=False):
        self.video = cv2.VideoCapture(0)
        self.detector = PoseModule.PoseDetector(upBody=True)
        self.pTime = 0

        self.right = right

        self.leftCount = 0
        self.rightCount = 0

        self.leftDir = 0
        self.rightDir = 0

        self.leftColor = (255, 0, 255)
        self.rightColor = (0, 0, 255)

        self.lmList = []

    def __del__(self):
        self.video.release()
        self.video = None

    def get_frame(self):
        success, img = self.video.read()
        img = self.detector.findPose(img, False)
        self.lmList = self.detector.findPosition(img, False)

        if len(self.lmList) != 0:


            if self.right:
                angle = self.detector.findAngle(img, 12, 14, 16)
            else:
                angle = self.detector.findAngle(img, 11, 13, 15)
            per = np.interp(angle, (210, 310), (0, 100))
            bar = np.interp(angle, (210, 310), (650, 100))

            # Check for the dumbbell curls
            if per == 100:
                if self.leftDir == 0:
                    self.leftCount += 0.5
                    self.leftDir = 1
            elif per == 0:
                if self.leftDir == 1:
                    self.leftCount += 0.5
                    self.leftDir = 0
            # print(count)

            # Draw Bar
            cv2.rectangle(img, (1100, 100), (1175, 650), (255, 0, 255), 3)
            cv2.rectangle(img, (1100, int(bar)), (1175, 650), (255, 0, 255), cv2.FILLED)
            cv2.putText(img, f'{int(per)} %', (1100, 75), cv2.FONT_HERSHEY_PLAIN, 4,
                        (255, 0, 255), 4)

            # add text that says "left arm" or "right arm"
            if self.right:
                cv2.putText(img, "Right Arm", (50, 100), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)
            else:
                cv2.putText(img, "Left Arm", (50, 100), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)

            # add text that says up or down
            if self.leftDir == 0:
                cv2.putText(img, "Up", (50, 150), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)
            else:
                cv2.putText(img, "Down", (50, 150), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)

            # Draw Curl Count
            # cv2.rectangle(img, (0, 450), (250, 820), (0, 255, 0), cv2.FILLED)
            # cv2.putText(img, str(self.leftCount), (45, 670), cv2.FONT_HERSHEY_PLAIN, 5,
            #             (255, 0, 0), 5)

        c_time = time.time()
        fps = 1 / (c_time - self.pTime)
        self.pTime = c_time

        # put fps on the bottom left corner of the screen
        cv2.putText(img, str(int(fps)), (70, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        # cv2.putText(img, str(int(fps)), (70, ), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        success, jpeg = cv2.imencode('.jpg', img)
        return jpeg.tobytes()

class ShoulderPressCounter(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        self.detector = PoseModule.PoseDetector(upBody=True)
        self.pTime = 0

        self.count = 0
        self.dir = 0

        self.color = (255, 0, 255)

        self.lmList = []

    def __del__(self):
        self.video.release()
        self.video = None

    def get_frame(self):
        success, img = self.video.read()
        img = self.detector.findPose(img, False)
        self.lmList = self.detector.findPosition(img, False)

        if len(self.lmList) != 0:
            # Find the angle of the shoulder
            angle = self.detector.findAngle(img, 11, 13, 15)

            # Check if the shoulder is raised
            if angle > 170:
                if self.dir == 0:
                    self.count += 1
                    self.dir = 1
            elif angle < 160:
                if self.dir == 1:
                    self.count += 1
                    self.dir = 0

            # Draw the shoulder angle
            cv2.putText(img, f'{int(angle)}', (50, 100), cv2.FONT_HERSHEY_PLAIN, 3,
                        self.color, 3)

            # Draw the shoulder press count
            cv2.rectangle(img, (0, 450), (250, 820), self.color, cv2.FILLED)
            cv2.putText(img, str(self.count), (45, 670), cv2.FONT_HERSHEY_PLAIN, 5,
                        (255, 0, 0), 5)

        c_time = time.time()
        fps = 1 / (c_time - self.pTime)
        self.pTime = c_time

        # Put FPS on the bottom left corner of the screen
        cv2.putText(img, str(int(fps)), (70, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        # cv2.putText(img, str(int(fps)), (70, ), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        success, jpeg = cv2.imencode('.jpg', img)
        return jpeg.tobytes()
