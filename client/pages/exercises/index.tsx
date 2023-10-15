import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Text, Stack, Image, Divider, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import WorkoutCard from '@/components/WorkoutCard'




function App() {
    return (
      <div>
    <div className='p-4'>
      <div className='flex flex-col justify-between'>
        <Heading size='xl'>Choose an exercise</Heading>
        <div className='flex flex-row justify-center '>
          <div className="grid grid-cols-3">
            {exerciseList.map(
              function (exercise) {
                return <WorkoutCard href={exercise.href} title={exercise.title} description={exercise.description} alt={exercise.alt} image={exercise.image} muscleGroup={exercise.muscleGroup} key={exercise.title} />;
              }
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }

export default App

const exerciseList = [
    {muscleGroup: "Pull", href: "exercises/curls", title: "Bicep Curls", description: "Grow your biceps using this exercise", alt: "Image of bicep curls", image: "https://media.istockphoto.com/id/179239248/photo/standing-bicep-dumbbell-curl.jpg?s=612x612&w=0&k=20&c=tiNrXiTdZTEPUgJrqP_bKK9JWQ_O108w_967FcqbM8Q="},
    {muscleGroup: "Push", href: "exercises/shoulder-press", title: "Shoulder Press", description: "Push yourself up using this exercise", alt: "Image of shoulder press", image: "https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg"},
    {muscleGroup: "Pull", href: "exercises/#", title: "Pull-Ups", description: "Use your own bodyweight to build a strong back and biceps", alt: "Image of pull-ups", image: "https://steelsupplements.com/cdn/shop/articles/shutterstock_612717155_1000x.jpg?v=1639314260"},
    {muscleGroup: "Pull", href: "exercises/#", title: "Lat Pulldowns", description: "Hit your lats hard with this exercise", alt: "Image of lat pull-downs", image: "https://miro.medium.com/v2/resize:fit:1358/0*7g3xHWvaXcGhd2Ag.jpg" },
    {muscleGroup: "Pull", href: "exercises/#", title: "Bent-Over Rows", description: "Another great exercise for your back and biceps", alt: "Image of bent-over rows", image: "https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg"},
    {muscleGroup: "Pull", href: "exercises/#", title: "Face Pulls", description: "Strengthen your rotator cuff and improve your shoulder mobility with this exercise", alt: "Image of face pulls", image: "https://static.strengthlevel.com/images/illustrations/face-pull-1000x1000.jpg"},
    {muscleGroup: "Push", href: "exercises/#", title: "Bench Press", description: "Build a big chest and triceps with this exercise", alt: "Image of bench press", image: "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh16114-1542293707.png?crop=0.668xw:1.00xh;0.149xw,0&resize=1200:*"},
    {muscleGroup: "Push", href: "exercises/#", title: "Incline Dumbbell Press",  alt: "Image of incline dumbell press",description: "Focus on the upper chest with this exercise", image: "https://static.strengthlevel.com/images/illustrations/incline-dumbbell-bench-press-1000x1000.jpg"},
    // {muscleGroup: "Push", href: "exercises/triceps-pushdowns", title: "Triceps Pushdowns", alt: "Image of triceps pushdowns", description: "Isolate your triceps with this exercise"},
    // {muscleGroup: "Push", href: "exercises/dips", title: "Dips", alt: "Image of dips", description: "Use your own bodyweight to build a strong chest, triceps, and shoulders"},
    // {muscleGroup: "Legs", href: "exercises/squats", title: "Squats", alt: "Image of squats", description: "Build strong legs and glutes with this exercise"},
    // {muscleGroup: "Legs", href: "exercises/deadlifts", title: "Deadlifts", alt: "Image of deadlifts", description: "Another great exercise for your legs, glutes, and back"},
    // {muscleGroup: "Legs", href: "exercises/lunges", title: "Lunges", alt: "Image of lunges", description: "Strengthen your hamstrings and quads with this exercise"},
    // {muscleGroup: "Legs", href: "exercises/calf-raises", title: "Calf Raises", alt: "Image of calf raises", description: "Build stronger calves with this exercise"},
    // {muscleGroup: "Core", href: "exercises/planks", title: "Planks", alt: "Image of plank", description: "Strengthen your core muscles with this exercise"},
    // {muscleGroup: "Core", href: "exercises/crunches", title: "Crunches", alt: "Image of crunches", description: "Work your abs with this exercise"},
    // {muscleGroup: "Core", href: "exercises/leg-raises", title: "Leg Raises", alt: "Image of leg raises", description: "Work your lower abs with this exercise"},
]
