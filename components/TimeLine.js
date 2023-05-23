import { Timeline } from "flowbite-react";
import React from "react";

const TimeLine = () => {
  return (
    <div className="p-20 bg-black">
      <Timeline horizontal={true}>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Title  className="text-teal-200">Facial Recogination</Timeline.Title>

            <Timeline.Body>
              Recogination of the face for initiating the process.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Title  className="text-teal-200">Energy Optimization</Timeline.Title>
      
            <Timeline.Body>
              Reducing resource consumption along with carbon footprint.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Title  className="text-teal-200">Interior Design</Timeline.Title>
            
            <Timeline.Body>
              Optimizing the interior design of the building to reduce the energy consumption.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Title  className="text-teal-200">Integrating the three levels in a single platform</Timeline.Title>
          
            <Timeline.Body>
              Get user ready to use the platform for the best experience.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimeLine;
