import React from 'react'
import './TestimonialsList.css'
import TestimonialsListCard from './TestimonialsListCard'
import userMarrySmith from './images/pic/marry-smith.jpg'

function TestimonialsList() {
    return (
        <ul className='testimonListing'>
            <TestimonialsListCard
                image = {userMarrySmith}
                name = 'Marry Smith'
                title = 'CEO'
                summary = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vitae magni? Cumque alias commodi obcaecati ipsa tempora illo error sed assumenda? Recusandae, delectus. Est atque cumque odit distinctio dolore cupiditate.'
            />
            <TestimonialsListCard
                image = {userMarrySmith}
                name = 'Marry Smith'
                title = 'CEO'
                summary = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vitae magni? Cumque alias commodi obcaecati ipsa tempora illo error sed assumenda? Recusandae, delectus. Est atque cumque odit distinctio dolore cupiditate.'
            />
            <TestimonialsListCard
                image = {userMarrySmith}
                name = 'Marry Smith'
                title = 'CEO'
                summary = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vitae magni? Cumque alias commodi obcaecati ipsa tempora illo error sed assumenda? Recusandae, delectus. Est atque cumque odit distinctio dolore cupiditate.'
            />
            <TestimonialsListCard
                image = {userMarrySmith}
                name = 'Marry Smith'
                title = 'CEO'
                summary = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vitae magni? Cumque alias commodi obcaecati ipsa tempora illo error sed assumenda? Recusandae, delectus. Est atque cumque odit distinctio dolore cupiditate.'
            />
        </ul>
    )
}

export default TestimonialsList
