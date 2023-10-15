import time

import cv2
import PoseModule


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
