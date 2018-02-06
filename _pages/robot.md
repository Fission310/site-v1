---
layout: page
title: Our Robot
permalink: /robot/
header: false
sidebar_title: Photos
sidebar_content: design_1.png|Prototype design of chassis, design_2.png|Linear slides basics, design_3.png|Design ideas and sketches, robot1.jpg|Robot during Francis Lewis Qualfier
content_basedir: robot
---

#### Engineering

##### Drivetrain and Chassis
The current drivetrain is a four-wheel mecanum drive, useful for navigational control (since the robot can move in any direction). To counter the problem of not being able to get onto the balancing stone, the plates on the side of the robot were cut to a 45 degree angle *behind the wheels*. Our electronics are now mounted on lexan plates on the sides of the robot.

###### __Previous Iteration__
Our previous drivetrain was a standard four-wheel tankdrive, with the wheels chained onto motors mounted on the chassis. Because the motors were placed above the chassis, rather than below it, the robot can maintain a lower center of gravity. However, this posed the problem of not being able to drive onto the balancing stone. This issue was fixed by placing a wedge on the back of the robot, which pushes the stone down while we drive backwards onto it. Our electronics, including the REV Expansion Hubs, were mounted on a sheet of lexan on the underside of the chassis, while the name plates are mounted on the robot's sides.

##### Acquirer
The new acquirer is completely remade from the previous two versions. It utilizes inwardly-rotating wheels to bring glyphs into the robot and into a hopper. The wheels are attached to a freely-rotating channel, which allows the mechanism to change shape to account for glyphs of different arrangements.

###### __Previous Iterations__
The previous acquirer had two mechanisms: the lift and the clamping servos. A servo on either side of the acquirer controlled a vertical rod, and turning the servos in opposite directions allowed the rods to clamp onto glyphs. The lift, made of drawer slides and attached to a spool of string, could then raise the clamped glyph to score or stack the glyph onto another glyph. If a glyph was stacked on top of another, both glyphs could be picked up at the same time by the clamping rods.

The orginal version of the acquirer divided the acquirer vertically into two with a door hinge, allowing the acquirer to clamp glyphs using two top servos, raise the hinge, and clamp another glyph using the two bottom servos. However, we realized this process was slow and ineffective, leading us to remove a servo from either side and combining the clampers on each side into one.

##### Hopper and Flipper
After being acquired, glyphs are stored in the robot on a ramp, which serves as both the hopper and the foundation for the flipping mechanism. In order to score the glyphs, the ramp will flip in the opposite direction of the acquirer, expelling the glyphs into the cryptobox. The robot will also be able to expel glyphs from the acquirer by spinning the acquirer motors in the opposite direction. The advantages of this system are that: 1) it's not necessary to turn around after acquiring glyphs from the glyph pit, and 2) glyphs can be scored from both sides of the robot, which is useful during the autonomous period.

##### Relic
The relic mechanism consists of a set of horizontal linear slides and a two-degrees-of-freedom servo clamp. The linear slides extend far enough so that the robot can pick up the relic from behind the balancing stone, which can be used as an alignment mechanism, saving precious endgame time. The clamp is used to grab on to the relic, and also rotates to pick the glyph up off the ground.

##### Arm
The arm is a square channel connected to a servo at one end, allowing the servo to freely rotate the channel in 180 degrees. The arm has a color sensor mounted at the other end, and its purpose is to detect the color of a jewel during the autonomous period.

---

#### Software Engineering
##### Autonomous
As soon as the kickoff video ended, we knew autonomous scoring was going to play a huge role in this year's game. Using a practice drivetrain as a testing robot, various autonomous routines were written, including a drive straight program using encoders and an IMU, a turn program using an IMU, and a jewel scoring program, which utilized the color sensor on the arm. We also experimented with Vuforia and detecting the VuMark, but the robot was unable to consistently drive to the target cryptobox column to score the glyph.
##### John Dewey Qualifiers
Our autonomous plan for our first qualifier was to simply score the jewel and park in the Safe Zone. However, during practice, something in the electronics malfunctioned and the color sensor would cause the Expansion Hub to lag during initialization, which made it take up to two minutes for the OpMode to become startable. We were able to solve this problem by removing the color sensor, but we were no longer able to use our jewel autonomous program; instead, we settled for parking in the Safe Zone.
##### Francis Lewis Qualifiers
By the second qualifier, we were able to use computer vision (CV) to detect jewel colors and score the jewel in autonomous. We were also able to combine this with our previous Safe Zone park autonomous to perform a 40 point auton.
