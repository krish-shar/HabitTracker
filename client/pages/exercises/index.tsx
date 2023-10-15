import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Text, Stack, Image, Divider, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import WorkoutCard from '@/components/WorkoutCard'



function App() {
  return (
    <div>
  <div className='p-4'>
    <div className='flex flex-col justify-between'>
      <Heading size='xl'>Choose an exercise</Heading>
      <div className='flex flex-row justify-center'>
        
        {exerciseList.map(
            function(exercise) {
                return <WorkoutCard href={exercise.href} title={exercise.title} description={exercise.description} alt={exercise.alt} image={exercise.image} muscleGroup={exercise.muscleGroup} key={exercise.title} />
            }
        )}
        
      </div>
    </div>
  </div>
</div>

  )
}

export default App

const exerciseList = [
    {muscleGroup: "Pull", href: "exercises/curls", title: "Bicep Curls", description: "Grow your biceps using this exercise", alt: "Image of bicep curls", image: "https://media.istockphoto.com/id/179239248/photo/standing-bicep-dumbbell-curl.jpg?s=612x612&w=0&k=20&c=tiNrXiTdZTEPUgJrqP_bKK9JWQ_O108w_967FcqbM8Q="},
    {muscleGroup: "Push", href: "exercises/shoulder-press", title: "Shoulder Press", description: "Push yourself up using this exercise", alt: "Image of shoulder press", image: "https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg"}
]
