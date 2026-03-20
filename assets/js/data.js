/* ── Modal data ── */
const data = {
  proj: {
    p1: {
      title: 'SillyQL — Simplified SQL Query Engine',
      tag: 'academic',
      cardDesc: 'Built a simplified SQL query engine in C++, applying space and time tradeoff analysis to meet performance constraints on large datasets.',
      subtitle: 'EECS 281: Data Structures & Algorithms',
      subtitleUrl: 'https://www.eecs.umich.edu/courses/eecs281/course',
      date: 'Winter 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
            <li>Implemented SillyQL, a simplified SQL (Structured Query Language) query engine in C++, supporting table creation, row insertion, and queries on large datasets</li>
            <li>Made data structure design decisions based on space and time tradeoff analysis to meet performance constraints at scale</li>
          </ul>
      `,
      html: `
        <p><a href="https://www.eecs.umich.edu/courses/eecs281/course" target="_blank">EECS 281</a> is Michigan's core data structures and algorithms course, centered on understanding and navigating the space and time tradeoffs in algorithmic design. The curriculum covered hash tables, binary search trees, graph algorithms, sorting algorithms, priority queues and heaps, and dynamic programming.</p>
        <p>The final project was SillyQL, a simplified version of SQL (Structured Query Language, the standard language for querying relational databases). The core challenge was parsing large datasets efficiently — the project required designing a system that could create tables, insert rows, and execute queries, all while choosing the right underlying data structures to meet performance constraints. I used hash tables for fast lookups and binary search trees for ordered queries, selecting between them based on the access pattern the query required.</p>
      `,
      tags: ['C++', 'Data Structures', 'Algorithms', 'SQL']
    },
    p2: {
      title: 'AM Superheterodyne Radio Receiver',
      tag: 'academic',
      cardDesc: 'Designed and wired a superheterodyne AM radio back end (bandpass filter, envelope detector, and output amplifier) as part of a signals and systems course.',
      subtitle: 'EECS 216: Introduction to Signals & Systems',
      subtitleUrl: 'https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-216/',
      date: 'Winter 2021',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Built the back end of a functioning superheterodyne AM radio from discrete components: bandpass filter to isolate a target frequency range, envelope detector to demodulate the AM (Amplitude Modulation) signal, and output amplifier to boost audio — all wired in series to a speaker</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/EECS216.jpg" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="Radio Circuit">
        <p><a href="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-216/" target="_blank">EECS 216</a> was an introduction to continuous-time linear systems, covering convolution, Fourier series and transforms, frequency response and filtering, the sampling theorem, and Laplace transforms with poles and zeros. The course tied theory directly to application — lectures covered analog communications and feedback control alongside the mathematical foundations, and five labs put those concepts on physical hardware.</p>
        <p>The final lab was the one that brought the most of it together: building the back end of a functioning superheterodyne AM radio from discrete components. Starting from the antenna input, I wired a bandpass filter built from resistors and capacitors to isolate a specific frequency range, an envelope detector using a diode and capacitor to demodulate the AM (Amplitude Modulation) signal by extracting the audio from the carrier wave, and an output amplifier using op-amps to boost the recovered audio signal before sending it to a speaker — all connected in series. To tune to a station, I adjusted the local oscillator frequency to shift a target broadcast into the bandpass filter's range.</p>
      `,
      tags: ['Circuit Design', 'Signal Processing', 'Hardware']
    },
    p3: {
      title: 'Probabilistic Roadmap Path Planning Study',
      tag: 'academic',
      cardDesc: 'Co-authored a research paper analyzing the robustness of a PRM path planning algorithm and vehicle dynamics for an autonomous bicycle robot in Simulink.',
      subtitle: 'MATH 462: Mathematical Modeling',
      subtitleUrl: 'https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/400-level-courses.html',
      date: 'Winter 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Co-authored a <a href='assets/pdfs/MATH_pathPlanningProject.pdf' target="_blank">research paper</a> with a partner analyzing an autonomous bicycle robot model in Simulink, covering the Pure Pursuit control system, vehicle dynamics, and PRM (Probabilistic Roadmap) path planning algorithm</li>
          <li>Tested PRM robustness across three maps of increasing obstacle coverage (20%, 50%, 73%), varying node count and connection distance across 10,000 trials per configuration</li>
          <li>Found that higher node counts consistently outperformed longer connection distances for path-finding success, with success rates ranging from 100% to 0% depending on map complexity and node count</li>
          <li>Identified diminishing returns beyond 100 nodes, suggesting an optimal node count exists for any given map</li>
          <li>Implemented a custom bicycle plant model in Simulink using continuous time integration, producing smoother paths than the original discrete time implementation</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/pathPlanning.jpg" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="Path Planning">
        <p><a href="https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/400-level-courses.html" target="_blank">MATH 462</a> was a mathematical modeling course in which my partner and I chose our own research topic for the <a href='assets/pdfs/MATH_pathPlanningProject.pdf' target="_blank">final paper</a>. We decided to investigate an autonomous bicycle robot model in Simulink, focusing on three areas: the existing control system, the vehicle dynamics, and the robustness of the PRM (Probabilistic Roadmap) path planning algorithm.</p>
        <p>The PRM algorithm distributes randomly placed nodes across a map, connects any two nodes within a specified Euclidean distance, and uses Dijkstra's algorithm to find the shortest path from start to goal. To test its robustness, we varied node count and connection distance across three maps of increasing complexity: 20%, 50%, and 73% obstacle coverage. The results were concrete: on the simplest map with 100 nodes and a long connection distance, the algorithm found a valid path in 100% of trials. As map complexity increased and node count dropped, success rates fell sharply — to 0% on the most complex map with only 5 nodes. We also found that increasing node count from 100 to 300 produced diminishing returns on path quality, suggesting an optimal node count exists for any given map beyond which additional nodes only increase computational cost without meaningfully improving the path.</p>
        <p>On the vehicle dynamics side, we implemented our own plant model in Simulink using continuous time integration to solve the bicycle's kinematic equations — the system of differential equations governing its x/y position and heading angle. Compared to the original model's discrete time integration, our version produced a smoother path, which we attributed to continuous integration better capturing the underlying dynamics of a physical bicycle.</p>
      `,
      tags: ['MATLAB', 'Path Planning', 'Mathematical Modeling'],
      links: [
        { emoji: '📄', label: 'View Project Paper', url: 'assets/pdfs/MATH_pathPlanningProject.pdf' }
      ]
    },
    p4: {
      title: 'Digital Signal Processing Optical Character Recognition',
      tag: 'academic',
      cardDesc: 'Led character classification and LaTeX document formatting for a five-person pipeline that converts handwritten lecture board screenshots into structured notes.',
      subtitle: 'EECS 351: Digital Signal Processing',
      subtitleUrl: 'https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-351/',
      date: 'Winter 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
            <li>Benchmarked five character classifiers in Python using scikit-learn against the EMNIST (Extended Modified National Institute of Standards and Technology) dataset (60,000 training samples): KNN (K-Nearest Neighbors), SVM (Support Vector Machine), Naïve Bayes, Decision Trees, and a LeNet CNN (Convolutional Neural Network)</li>
            <li>Selected the LeNet CNN for the full-scale model based on accuracy, speed, and MATLAB interface compatibility</li>
            <li>Implemented the LaTeX (a document typesetting language used widely in technical and academic writing) document formatting subsystem in MATLAB to convert classifier output into a structured, formatted document</li>
            <li>Led the project plan, defining subsystem ownership and deadlines across a five-person team</li>
            <li>Wrote the majority of project documentation across GitHub and the team website</li>
          </ul>
      `,
      html: `
        <img src="/assets/images/EECS351.jpg" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="OCR System">
        <p><a href="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-351/" target="_blank">EECS 351</a> was a digital signal processing course with a team project component. Our five-person team chose to build a pipeline to convert whiteboard lecture screenshots into formatted LaTeX (a document typesetting language used widely in technical and academic writing) documents, motivated by a real problem we had during COVID: students who miss class and rely on lecture recordings often can't read what's written on the board. The system ran in four sequential stages: image processing and filtering, character isolation, character classification, and LaTeX document generation.</p>
        <p>I led the character classification subsystem, where I benchmarked five classifiers in Python using the scikit-learn library against the EMNIST dataset (a standard handwritten character dataset with 60,000 training samples): K-Nearest Neighbors, SVM (Support Vector Machine), Multinomial Naïve Bayes, Decision Trees, and a LeNet CNN (Convolutional Neural Network), each implemented in their own Jupyter Notebook. SVM achieved the highest accuracy at 90.87%, but I selected the LeNet CNN for the full-scale model because SVM's training and testing time was prohibitively slow and the CNN had a cleaner interface with the broader MATLAB codebase. I also owned the LaTeX document formatting subsystem, which I implemented in MATLAB to take the classifier output and generate a structured document with metadata fields and LaTeX syntax support like superscripts. I led the project plan as well, defining subsystem ownership and deadlines, and wrote the majority of the documentation across <a href="https://github.com/EmiliaPsacharopoulos/HandwritingToLatex" target="_blank">GitHub</a> and the <a href="https://sites.google.com/umich.edu/eecs-351-handwriting-to-latex/home?authuser=0" target="_blank">team website</a>.</p>
        <p>The full pipeline worked end-to-end on block handwriting under good lighting conditions. The main failure modes were light-colored markers, slanted writing, and ambiguous character pairs like O vs. 0 and l vs. 1, limitations we documented and attributed primarily to training data constraints rather than architectural issues.</p>
      `,
      tags: ['Python', 'MATLAB', 'Signal Processing', 'Machine Learning'],
      links: [
        { emoji: '🔗', label: 'View on GitHub', url: 'https://github.com/EmiliaPsacharopoulos/HandwritingToLatex' },
        { emoji: '🌐', label: 'View Project Website', url: 'https://sites.google.com/umich.edu/eecs-351-handwriting-to-latex/home' }
      ]
    },
    p5: {
      title: 'Adaptive Cruise Control Embedded System',
      tag: 'academic',
      cardDesc: 'Built and deployed a fully autonomous Adaptive Cruise Control system on a physical driving simulator, covering three operating modes from manual to position-following.',
      subtitle: 'EECS 461: Embedded Control Systems',
      subtitleUrl: 'https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-461/',
      date: 'Winter 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Built an ACC (Adaptive Cruise Control) system in Simulink with three autonomous operating modes: manual, fixed-velocity, and lead-car position-following</li>
          <li>Deployed the system onto an S32K144 microcontroller via Simulink's automatic C code generation, running on a physical driving simulator</li>
          <li>Developed a haptic interface embedded controller across earlier assignments using C, SPI protocol, and NXP software</li>
          <li>Designed PID controllers and vehicle dynamics models in Simulink to represent systems of differential equations</li>
          <li>Debugged subsystem behavior by analyzing oscilloscope waveform responses from sensor inputs</li>
        </ul>
      `,
      html: `
        <div style="display:flex;gap:0.5rem;margin-bottom:1.1rem;flex-wrap:wrap">
          <img src="/assets/images/eecs461sim.jpg" style="flex:2;min-width:200px;border:1px solid var(--grid)" alt="Simulator">
          <img src="/assets/images/eecs461microprocessor.jpg" style="flex:1;min-width:100px;border:1px solid var(--grid)" alt="Microprocessor">
        </div>
        <p><a href="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-461/" target="_blank">EECS 461</a> was an embedded control systems course built around progressively complex assignments, each adding a layer toward the final project. Throughout the semester, my partner and I developed a haptic interface embedded controller using an S32K144 microcontroller, C, and SPI (Serial Peripheral Interface) protocol in an NXP software workspace, writing C code to read from and write to hardware registers directly. We designed flow logic, PID controllers, and vehicle dynamics models in Simulink to represent complex systems of differential equations, and used an oscilloscope to analyze subsystem waveform responses for debugging.</p>
        <p>The final project brought all of it together: an ACC (Adaptive Cruise Control) system with three operating modes and auto-steering active throughout. In Manual mode, the user controls speed and path through a potentiometer and haptic wheel. Velocity mode sets a fixed traveling speed via dip switches on the microcontroller. Position mode activates automatically when a lead car enters a preset distance and is traveling slower, matching its speed. We built the entire system in Simulink using scaffolding provided by the course instructors, then used Simulink's automatic C code generation to deploy it onto the S32K144 microcontroller running on a physical driving simulator.</p>
        <p>The system performed successfully at the demo — all three modes triggered and transitioned correctly, and the position-following behavior worked as intended.</p>
      `,
      tags: ['C', 'Embedded Systems', 'Control Systems', 'PID Control']
    },
    p6: {
      title: 'Personal Portfolio Website',
      tag: 'personal',
      cardDesc: 'Built a personal portfolio site in HTML, CSS, and JavaScript — clean, skimmable by default, and designed to reflect a specific point of view.',
      subtitle: 'Personal Project',
      date: 'Summer 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Built the original site in summer 2022 using HTML, CSS, and JavaScript, customizing an <a href="https://html5up.net/" target="_blank">HTML5 UP</a> template as a foundation</li>
          <li>Identified a gap between the site and my personal brand, then redesigned the entire UI from scratch</li>
          <li>Introduced a two-layer content model (modal and longform toggle) so the reader actively chooses how deep to go, keeping the main view skimmable by default</li>
          <li>Rebuilt the visual design to reflect a clear personal brand: an engineer who thinks logically and communicates clearly</li>
        </ul>
      `,
      html: `
        <p>I built the first version of this site in summer 2022 using HTML, CSS, and JavaScript, customizing an <a href="https://html5up.net/" target="_blank">HTML5 UP</a> template as a foundation. It did the job of displaying my work, but returning to it later, I realized the layout was harder to read than it should have been — even I struggled to skim it, and I wrote the material. The visual design didn't reflect how I think about my own work, and nothing about it communicated a clear point of view.</p>
        <p>In spring 2026, I decided to redesign it from scratch, starting by defining my personal brand: an engineer who approaches problems logically and communicates clearly. I used that as the design brief and built the entire UI myself. The most important structural change was introducing a two-layer content model: all detailed content is now hidden behind both a modal and a longform toggle, so the reader actively chooses how deep to go rather than being confronted with everything at once. The main view stays clean and skimmable by default. The visual design I built from scratch to match that brand — the site now feels like it belongs to someone with a specific point of view rather than a generic portfolio template.</p>
      `,
      tags: ['HTML', 'CSS', 'JavaScript', 'UX Design'],
      links: [
        { emoji: '🔗', label: 'View on GitHub', url: 'https://github.com/EmiliaPsacharopoulos/EmiliaPsacharopoulos.github.io' }
      ]
    },
    p7: {
      title: '"Autonomous Rocket League" Embedded System',
      tag: 'academic',
      cardDesc: 'Designed a reactive autonomous robot and full embedded systems stack for a physical recreation of Rocket League.',
      subtitle: 'EECS 373: Embedded System Design',
      subtitleUrl: 'https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-373/',
      date: 'Fall 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Designed and implemented a reactive autonomous Rocket League algorithm using real-time computer vision input</li>
          <li>Wrote the computer vision Python script detecting AprilTags and field colors for real-time robot state estimation</li>
          <li>Led C implementation of embedded components: magnetometer, gameplay timers, PS2 controller SPI communication, and USB-to-Serial adapter</li>
          <li>Scoped and demoed a goaltending robot under time pressure after a last-minute team setback</li>
          <li>Produced systems engineering diagrams, a milestone report, and the project poster</li>
        </ul>
      `,
      html: `
        <iframe class="modal-video" src="https://www.youtube.com/embed/ynsI1RB5d14" title="Rocket League Demo 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="modal-video" src="https://www.youtube.com/embed/HcMNyMvgoTM" title="Rocket League Demo 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src="/assets/images/EECS373_Poster.pptx.png" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="Project Poster">

        <p><a href="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-373/" target="_blank">EECS 373</a> was an embedded systems design course concluding with a month-long team project. Our team of four chose to build a real-life version of Rocket League, the car-soccer video game, where a human-controlled robot competed against an autonomous one on a physical field. My primary ownership was the autonomy algorithm: a reactive system that used a computer vision Python script to detect the ball and field state in real time and feed that directly into the robot's decisions.</p>
        <p>On the embedded side, I led the C implementation for several components: a magnetometer for orientation, gameplay timers, PlayStation 2 controller SPI (Serial Peripheral Interface) communication for the human-controlled robot, and a USB-to-Serial adapter for system communication. The computer vision side was Python — I wrote the script that detected AprilTags (QR-code-style markers used for position tracking) and colors on the field to feed real-time state into the robot's decisions. I also designed and implemented the full autonomous Rocket League algorithm, though the demo circumstances meant it never got validated and tested in time. My documentation contributions included systems engineering diagrams, a milestone report, and the project poster.</p>
        <p>Two days before the demo, it became clear that a critical piece of a teammate's work wasn't going to be ready. The rest of the team pulled an all-nighter to stabilize what we could, which left no time to validate the full autonomy algorithm. I made the call to scope it down to a goaltending robot that used the CV (computer vision) system to track the ball and move to intercept it. It worked, though latency in the pipeline meant it struggled with fast shots. The lesson I took from it was practical: trust teammates but verify progress early, and test in small integrated chunks throughout a project rather than waiting for full system tests at the end.</p>
      `,
      tags: ['C', 'Python', 'Embedded Systems', 'Computer Vision']
    },
    p8: {
      title: 'Colorization Model Replication with Loss Function Analysis',
      tag: 'academic',
      cardDesc: 'Replicated a deep learning image colorization model to investigate how loss function choice affects output quality.',
      subtitle: 'EECS 442: Computer Vision',
      subtitleUrl: 'https://web.eecs.umich.edu/~justincj/teaching/eecs442/WI2021/syllabus.html',
      date: 'Fall 2022',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Replicated Zhang et al.'s <a href="https://richzhang.github.io/colorization/" target="_blank">"Colorful Image Colorization"</a> CNN architecture, training on a 90,000-image subset of the MIT Mini Places dataset</li>
          <li>Investigated the impact of loss function choice by substituting the authors' Cross Entropy loss with MSE (Mean Squared Error)</li>
          <li>Tuned ADAM (Adaptive Moment Estimation) optimizer parameters to compensate for reduced computational resources and training data</li>
          <li>Demonstrated that MSE produces visibly duller, more monochromatic outputs than Cross Entropy on a pixel classification task</li>
        
        </ul>
      `,
      html: `
        <img src="/assets/images/eecs_442.png" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="Colorization Results">
        <p><a href="https://web.eecs.umich.edu/~justincj/teaching/eecs442/WI2021/syllabus.html" target="_blank">EECS 442</a> covered the core theory and methods of computer vision, including convolutional neural networks, image processing, and deep learning approaches to visual understanding. The course culminated in an independent research report, for which I chose to replicate a published deep learning colorization model and use it to investigate how loss function choice affects output quality.</p>
        <p>The model, originally from Zhang et al.'s <a href="https://richzhang.github.io/colorization/" target="_blank">"Colorful Image Colorization" (ECCV 2016)</a>, uses a CNN (Convolutional Neural Network) architecture (a class of neural network that applies learned filters across an image to detect patterns) with downsampling and upsampling layers to compress and reconstruct spatial information, batch normalization to stabilize training, and Leaky ReLU (Rectified Linear Unit) activation functions that introduce non-linearity so the network can learn complex mappings. My replication trained on a 90,000-image subset of the MIT Mini Places dataset using a tuned ADAM (Adaptive Moment Estimation) optimizer, an adaptive gradient descent algorithm that adjusts learning rates per parameter during training, and deliberately omitted the authors' class-rebalancing method to isolate the variable I was testing: replacing their Cross Entropy loss function with MSE (Mean Squared Error).</p>
        <p>The results were clear. MSE produced consistently duller, more monochromatic outputs — only blues retained any vibrancy across test images. My explanation was that MSE, designed for regression problems where outputs can range across any value, converges much more slowly on a classification task like colorization than Cross Entropy, which is purpose-built to penalize confident wrong predictions. The experiment confirmed that loss function choice is not just a technical detail: it has a direct, visible impact on what a model actually learns to produce.</p>  
      `,
      tags: ['Python', 'Computer Vision', 'Deep Learning'],
      links: [
        { emoji: '📄', label: 'View Project Paper', url: 'assets/pdfs/EECS_442_emiliap_final_report.pdf' }
      ]
    },
    p9: {
      title: 'Autonomous Path Planning with LIDAR',
      tag: 'academic',
      cardDesc: 'Built a SLAM-based autonomous navigation stack on physical robots, from motor control to maze navigation.',
      subtitle: 'EECS 467: Autonomous Robots',
      subtitleUrl: 'https://web.eecs.umich.edu/~kuipers/teaching/eecs467-F19.html',
      date: 'Winter 2023',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Implemented occupancy grid mapping, particle filter localization, and path planning on a LiDAR-equipped M-Bot</li>
          <li>Built forward and inverse kinematics models to translate between joint space and physical robot motion</li>
          <li>Fused odometry and LiDAR data for accurate real-time localization</li>
          <li>Tuned PID controllers for reliable low-level motor control on physical hardware</li>
          <li>Demonstrated end-to-end autonomous maze navigation on a physical robot</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/slam.png" style="width:100%;margin-bottom:0.5rem;border:1px solid var(--grid)" alt="SLAM map">
        <img src="/assets/images/mbots.png" style="width:100%;margin-bottom:0.5rem;border:1px solid var(--grid)" alt="M-Bots">
        <img src="/assets/images/slam_2.jpg" style="width:50%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="SLAM 2">
        <p><a href="https://web.eecs.umich.edu/~kuipers/teaching/eecs467-F19.html" target="_blank">EECS 467</a> was a lab-based robotics course built around the M-Bot, a four-wheel-drive robot equipped with a LiDAR (Light Detection and Ranging) sensor. Working with one partner, I implemented the core stack for SLAM (Simultaneous Localization and Mapping) based autonomous navigation across a series of labs that each built on the last.</p>
        <p>We started with low-level control: odometry and PID (Proportional-Integral-Derivative) tuning to get the robot moving accurately, then moved up to occupancy grid mapping, where the robot used LiDAR readings to build a 2D map of its environment. From there we added localization using a particle filter, so the robot could track its position within that map in real time. Path planning came last, tying everything together so the robot could navigate autonomously — finding its way through a maze it had never seen before. The robot navigated the maze end-to-end at the final demo.</p>
`,
      tags: ['C++', 'Python', 'Autonomous Navigation', 'Sensor Fusion', 'Robotics']
    },
    p10: {
      title: 'Multi-Agent Path Planning & Collision Avoidance',
      tag: 'academic',
      cardDesc: 'Led path planning, path-following, and testing for a multi-agent collision avoidance system on physical robots.',
      subtitle: 'EECS 467: Autonomous Robots · Major Design Experience',
      subtitleUrl: 'https://web.eecs.umich.edu/~kuipers/teaching/eecs467-F19.html',
      date: 'Winter 2023',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Designed and demonstrated a multi-agent path planning and collision avoidance system on Michigan's physical M-Bot robots, built on the CBS (Conflict-Based Search) algorithm for completeness and optimality guarantees</li>
          <li>Led path-following logic implementation, TCP (Transmission Control Protocol) server-client architecture, and PID (Proportional-Integral-Derivative) controller configuration for robot operation</li>
          <li>Owned the testing effort — designed the QA test plan, test scenarios, simulation field, and testing matrix; ran six successful trials across varying levels of map complexity; produced a video walkthrough of the system</li>
        </ul>
      `,
      html: `
        <iframe class="modal-video" src="https://www.youtube.com/embed/qFqYIITFqd0?si=hdwI-rVQdYdWpBuQ" title="Multi-Agent Path Planning Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src="/assets/images/eecs467.jpg" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="M-Bots testing">
        <p>I chose <a href="https://web.eecs.umich.edu/~kuipers/teaching/eecs467-F19.html" target="_blank">EECS 467: Autonomous Robotics</a> as my capstone (Michigan's Major Design Experience, or MDE) because I had a strong interest and academic background in robotics by senior year. Our team of four designed and demonstrated a multi-agent path planning and collision avoidance system on Michigan's physical M-Bot robots. We built on the CBS (Conflict-Based Search) algorithm for its completeness and optimality guarantees, implementing path-following logic that translated a 2D path array into linear and angular velocities over a TCP (Transmission Control Protocol) server-client architecture, and configured a PID (Proportional-Integral-Derivative) controller for each robot to ensure smooth operation.</p>
        <p>My primary contributions were leading the path-following logic implementation, TCP communications, and PID controller configuration, as well as owning the testing effort. I designed the QA test plan to verify the system worked end-to-end in the real world — creating test scenarios, designing the simulation field, and building the testing matrix. We ran six trials across varying levels of map complexity, and the system performed successfully. I also led the team's technical documentation, including producing a video walkthrough of the system.</p>
        `,
      tags: ['C++', 'Multi-Agent Systems', 'Path Planning', 'Robotics', 'PID Control'],
      links: [
        { emoji: '🔗', label: 'View on GitHub', url: 'https://github.com/EmiliaPsacharopoulos/multi-agent-collision-avoidance' }
      ]
    },
    p11: {
      title: 'ROS 2 Infrastructure Stack',
      tag: 'personal',
      cardDesc: 'Designed and implemented a five-package ROS 2 stack in C++ where a robot follows pose inputs from multiple sources and reaches targets via a motion controller.',
      subtitle: 'Coding Challenge',
      date: 'Summer 2025',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Built five modular C++ ROS 2 (Robot Operating System 2) packages from scratch in a 6-hour coding challenge: clock pose issuer, GUI pose issuer, motion controller, and two coordinate frame transformers</li>
          <li>Designed the system so a robot follows pose inputs from multiple sources (clock-based positions or user-selected GUI poses) and reaches each target via a motion controller</li>
          <li>Handled coordinate frame conversion between the normalized world frame and the robot's local body frame to keep each package decoupled from the simulation's internals</li>
          <li>Delivered a full documentation suite, system connectivity diagram, test suite, and shell scripts for building and launching the system</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/packages_topics_connectivity_system_diagram.png" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="System Diagram">
          <p>For a 6-hour robotics coding challenge, I designed and implemented a ROS 2 (Robot Operating System 2) stack in C++ where a robot follows pose inputs from multiple sources and reaches each target using a motion controller. I built five packages from scratch, each with a focused responsibility. The clock pose issuer converts clock time into 6D positions on a unit circle. The GUI pose issuer gives the user a manual interface to issue pose commands directly, with a spacebar reset. The motion controller subscribes to both pose sources and converts the target pose into velocity commands. Two transformer packages handle coordinate frame conversion, mapping between the normalized world frame and the robot's local body frame, so each component stays decoupled from the simulation's internal coordinate system.</p>
          <p>I also wrote a full documentation suite covering installation, build and run instructions, and testing and formatting procedures, and included a system diagram showing how all five packages connect through their ROS 2 topics. I kept each package's structure consistent and straightforward to extend — adding a new package or controller means following a clear pattern rather than reverse-engineering existing code. The submission included a test suite and shell scripts for rebuilding and launching the system.</p>
        `,
      tags: ['C++', 'Robotics', 'Motion Control', 'Systems Design'],
      links: [
        { emoji: '🔗', label: 'View on GitHub', url: 'https://github.com/EmiliaPsach/ROS2-Infrastructure-Stack' }
      ]
    },
    p12: {
      title: 'NYC Soccer League App',
      tag: 'personal',
      cardDesc: 'Built a React Native iOS app in TypeScript to modernize player management for a NYC recreational soccer league.',
      subtitle: 'Personal Project',
      date: 'Summer 2025',
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>As team captain for a NYC recreational soccer league, identified that managing attendance over WhatsApp, schedules over email, and enrollment through a Google Sheet was unnecessary friction — and built an app to address it</li>
          <li>Built a React Native iOS MVP in TypeScript covering player accounts, schedule viewing, game RSVPs, push notifications, league enrollment, team management, and an admin dashboard</li>
          <li>Currently in alpha — replacing dummy data with real league data and validating the push notification system before pitching to the league and submitting to the App Store</li>
        </ul>
      `,
      html: `
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;margin-bottom:1.1rem">
          <img src="/assets/images/nycwsoc_app_admin_dashboard.png" style="width:100%;border:1px solid var(--grid)" alt="Admin Dashboard">
          <img src="/assets/images/nycwsoc_app_player_screen.png" style="width:100%;border:1px solid var(--grid)" alt="Player Screen">
          <img src="/assets/images/nycwsoc_app_game_details.png" style="width:100%;border:1px solid var(--grid)" alt="Game Details">
          <img src="/assets/images/nycwsoc_app_league_registration.png" style="width:100%;border:1px solid var(--grid)" alt="League Registration">
        </div>
        <p>I joined a recreational soccer league in NYC, took on the role of team captain, and decided to build an app after noticing how much friction the league's current setup created. Managing attendance meant chasing RSVPs over WhatsApp, game times arrived via email two days before kickoff, and players enrolled in new seasons through a Google Sheet linked on the league's website. Most leagues in the city already have a dedicated app for this, and it seemed like a natural gap to fill.</p>
        <p>I built a React Native iOS MVP in TypeScript, covering the core player-facing and admin workflows: player accounts and authentication, schedule viewing with a calendar grid, game RSVPs, push notification reminders, league enrollment, team management, and an admin dashboard with CSV export — motivated by a problem I experienced firsthand as team captain. It's currently in alpha; I'm replacing dummy data with real league data and verifying the notification system end-to-end before pitching it to the league and deploying to the App Store.</p>
        `,
      tags: ['Mobile Development', 'TypeScript'],
      links: [
        { emoji: '🔗', label: 'View on GitHub', url: 'https://github.com/EmiliaPsach/nycwsoc' }
      ]
    }
  },
  expMeta: {
    e1: { jobTitle: 'Engineering Intern', company: 'The George Washington University', location: 'Ashburn, VA', dates: 'June 2018 — August 2018', tagline: 'Supported PhD research on hydrophobic aluminum treatment methods and independently designed a phase change materials heat retention experiment using the lab\'s facilities.', website: 'https://www.gwu.edu/' },
    e2: { jobTitle: 'Engineering Technician Intern', company: 'NAVSEA', location: 'Washington Navy Yard, DC (Remote)', dates: 'May 2020 — January 2021', tagline: 'Synthesized hundreds of testing documents into executive summaries for Navy leadership and organized a multi-day leadership conference for Unmanned Undersea Vehicle program managers.', website: 'https://www.navsea.navy.mil/' },
    e3: { jobTitle: 'Robotics Research Engineering Intern', company: 'University of Michigan Robotics Institute', location: 'Ann Arbor, MI', dates: 'May 2021 — December 2021', tagline: 'Proposed and led a full electrical redesign of an open-source research robot — cutting platform costs by over 91% and quadrupling communication and motor control capabilities.', website: 'https://robotics.umich.edu/' },
    e4: { jobTitle: 'Product/Test Engineering Intern', company: 'Analog Devices, Inc.', location: 'Greensboro, NC', dates: 'May 2022 — August 2022', tagline: 'RF test engineering intern on the Aerospace and Defense team, automating chip characterization and test results analysis for satellite communications technologies.', website: 'https://www.analog.com/en/index.html' },
    e5: { jobTitle: 'Autonomy Software Engineer', company: 'Aurora Flight Sciences (Boeing)', location: 'Cambridge, MA (and remote)', dates: 'July 2023 — November 2025', tagline: 'Software engineer at a Boeing-subsidiary R&D company, owning full-stack development, systems architecture, and technical delivery across six programs in autonomous systems and sustainable aviation.', website: 'https://www.aurora.aero/' },
    e7: { jobTitle: 'Product Engineer', company: 'Basis AI', location: 'New York, NY', dates: 'December 2025 — March 2026', tagline: 'Technical owner of full-stack development for key product features from design to production at an early-stage startup.', website: 'https://www.getbasis.ai/' }
  },
  exp: {
    e7: {
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Assumed full technical ownership of the reconciliations product area within two months — the previous lead departed mid-project, and I drove it forward as the only engineer on one of the most critical parts of an accounting automation product</li>
          <li>Designed and shipped Custom-Month Reconciliations from scratch, owning the full lifecycle from product scoping and stakeholder alignment through QA and production rollout for thousands of customers — reworking backend data structures and calculation logic to support any monthly close cadence in place of hardcoded calendar-month logic</li>
          <li>Diagnosed and resolved blocking issues in the Reconciliation Editor (a replacement UX built by a contractor who left before finishing it), designed the QA test plan, and drove it to production</li>
          <li>Designed and shipped 12-Month Planning Visibility from scratch, owning the full lifecycle from product scoping and alignment with PM and tech lead through production rollout for thousands of customers — extending the platform's planning horizon for accountants and introducing product controls such as disabling auto-sign-off on tasks in future months</li>
          <li>Resolved 30 customer bugs using test-driven debugging practices — writing tests to reproduce failures before fixing, then expanding the test suite to prevent regressions; was frequently the primary escalation contact for on-call incidents</li>
          <li>Diagnosed and fixed 4 system-level performance issues including line item matching timeouts, database query bottlenecks in orchestration services, and chronic background job failures</li>
        </ul>
      `,
      html: `
        <p>I shipped 3 features to production for thousands of customers and owned the entire reconciliations product area — picking up accounting as a new domain from scratch in the process. Within two months of joining, the engineer leading reconciliations departed mid-project, and I assumed full technical ownership as the only engineer actively working on one of the most critical parts of the product.</p>
        <p>The flagship initiative I took on was Custom-Month Reconciliations, which I designed and shipped from scratch. The original codebase was hardcoded to perform reconciliations only from the first to the last day of a calendar month. I extended this across the backend, reworking data structures and calculation logic throughout, to support any combination of months over a year, enabling close cadences like quarterly (March, June, September, December) or annual. I started with product scoping (user flow diagrams, product descriptions, and internal FAQs) then validated proposed business logic with accounting stakeholders before moving into technical scoping, breaking my work into milestones with effort estimates and verification criteria. I led a full round of QA testing to verify the feature end-to-end, set up a feature flag for the rollout, authored a finalized product description distributed to non-technical stakeholders, and delivered an internal presentation to the customer-facing support team before driving it to production.</p>
        <p>In parallel, I took over the Reconciliation Editor — a replacement UX for the live editor, originally built by a contractor who left before finishing it. The code had been sitting dormant: core UI interactions were broken, including file linking that failed to resolve the correct month and category folder, and any change required mirroring updates across both editors simultaneously. I diagnosed and resolved the blocking issues across frontend and backend logic, designed the QA test plan to verify the feature end-to-end before rollout, and drove it to production.</p>
        <p>Beyond reconciliations, I designed, scoped, and shipped a 12-Month Planning Visibility feature from scratch — extending the platform's planning horizon for accountants and including product-level permissions. I authored the product scoping document and got alignment from the program manager, then moved into technical scoping and alignment with the engineering pod's tech lead before owning the full lifecycle through implementation, QA, and production rollout for thousands of customers.</p>
        <p>On the production stability side, I resolved 30 customer bugs (including production hotfixes and database migrations to clean up duplicate records and session context errors) using test-driven debugging practices: writing tests to reproduce each failure before implementing a fix, then expanding the test suite to prevent regressions. I was frequently the engineer that on-call escalations landed on, and wrote detailed root cause analyses after each incident. I also diagnosed and fixed four system-level performance issues: line item matching timeouts, database query bottlenecks in orchestration services, and chronic background job failures, unblocking jobs that had been failing entirely. I worked fully AI-native, using AI agents as the primary tool across every stage of the work: coding, debugging, product scoping, technical architecture, and documentation. After four months I decided to leave — the reconciliations product area was in a stable state and I handed it off completely before my last day.</p>
      `,
      tags: ['Python', 'PostgreSQL', 'React', 'TypeScript', 'Full-Stack Development', 'Test-Driven Development']
    },
    e5: {
      htmlShort: `
        <span class="modal-tl-role">Overall</span>
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem;margin-bottom:1.1rem">
          <li>Promoted from Associate to Autonomy Engineer in eight months — a track that typically takes two or more years</li>
        </ul>
        <span class="modal-tl-role">Paradigm — Business Insights Optimization Tool for Sustainable Aviation</span>
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem;margin-bottom:1.1rem">
          <li>Identified that the existing Python/Dash stack couldn't support internal deployment and independently rebuilt the application from scratch as a React TypeScript + Python FastAPI + PostgreSQL full-stack web application, designing the database schema and migrating 2GB of data</li>
          <li>Built a Mapbox route network visualization to communicate the optimizer's output — rendering which combinations of airport upgrades enabled which route networks across a target market for a given technology scenario, making the geographic and connectivity implications of each upgrade sequence legible at a glance</li>
          <li>Owned all coding changes to extend the CP-SAT decision model with time-dependent logic, co-developing the math with the senior engineer who originally built the framework, allowing optimal technology selections to persist across multi-year planning horizons</li>
          <li>Drove the case study effort end-to-end — identifying insights to surface, collecting the data, and presenting to 25 Boeing engineers at a sustainability workshop in Seattle</li>
          <li>Produced the program's first comprehensive documentation suite for an 8,000+ line CP-SAT optimization codebase — enabling future developer onboarding on a mathematical framework too complex to approach without it; received an Aurora immediate recognition award</li>
        </ul>
        <span class="modal-tl-role">Boeing Cascade Climate Impact Model</span>
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem;margin-bottom:1.1rem">
          <li>Won first place in a two-week engineering hackathon by diagnosing and restructuring the Non-CO2 module: eliminating redundant queries and recomputations, cutting runtime from 17m 50s to 4.3s (99.6% improvement), and unblocking the module for customer deployment; received an Aurora immediate recognition award</li>
        </ul>
        <span class="modal-tl-role">DoD Autonomy Architecture</span>
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Selected among five Aurora engineers in a competitive downselect to continue the program, and placed on the highest-priority workstream: delivering the ICD (Interface Control Document) — coordinating across six companies, architecting the documentation format, and driving on-time content merging for a hundreds-of-pages primary deliverable</li>
          <li>Built two automated verification tools to validate the ICD: a Groovy Cameo macro cross-validating thousands of message schema references against the reference architecture, and a Python Word parser flagging prose inconsistencies — recommendations from the latter were adopted into the program's syntax guidelines; received an Aurora immediate recognition award</li>
          <li>Designed Level 1 compliance requirements and a C2 (Command and Control) authority model for autonomous distributed systems; both passed Change Review Board across all participating companies</li>
        </ul>
      `,
      html: `
        <p>Aurora Flight Sciences is structured as an R&D company, meaning engineers rotate across programs rather than owning a single product long-term. In my time there I worked across six programs, and was promoted from Associate to Autonomy Engineer in eight months — a track that typically takes two or more years.</p>

        <div class="modal-timeline">

          <div class="modal-tl-item">
            <div class="modal-tl-dot"></div>
            <span class="modal-tl-date">July 2023 – October 2023</span>
            <span class="modal-tl-role">Autonomy Core — Aurora Internal Framework</span>
            <p>My first few months at Aurora were spent on the internal autonomy framework, working through bug fixes to get oriented on the codebase before moving onto the DoD program.</p>
          </div>

          <div class="modal-tl-item">
            <div class="modal-tl-dot"></div>
            <span class="modal-tl-date">September 2023 – March 2024</span>
            <span class="modal-tl-role">DoD Autonomy Architecture</span>
            <p>From the start I was simultaneously on the compliance and authority team and the documentation team. On the compliance side, I worked with a small group to design Level 1 compliance requirements and a scalable C2 (Command and Control) authority model for autonomous distributed systems, defining how authority propagates through both command chain and distributed system architectures. Both architectural contributions passed a Change Review Board process across all participating companies to be included in the program. On the documentation side, I engineered a pipeline of Python parsers and Bash scripts to collect, integrate, and present content on a static site hosting all decision-justification documentation. When a security delay blocked several teammates from accessing the program, I identified non-confidential site development tasks and delegated them to three teammates to keep delivery on track — Aurora recognized this with an immediate recognition award.</p>
            <p>Around December, delivering the ICD (Interface Control Document) became the program's top priority. I transitioned onto that effort full time, taking on a largely technical communication role — architecting the documentation format, establishing a review process with a senior engineer, coordinating across all six companies to define what each team needed to contribute, and driving the merging of their content into the final document on time.</p>
            <p>In February 2024 I was among five Aurora engineers selected to continue through the final downselect phase. To verify the ICD's accuracy, I built two tools: a Groovy Cameo macro that automated cross-validation of thousands of message schema references against the reference architecture, catching misalignments between the autonomy message schema and the MBSE (Model-Based Systems Engineering) model that had been accumulating as the two fell out of sync; and a Python Word parser that flagged inconsistencies between message table contents and surrounding prose, which surfaced enough structural issues that I ended up recommending changes to the program's message reference syntax guidelines. The program concluded in March 2024. After it ended, I prototyped a modular C++ base library to implement the authority definition we had designed — left unfinished when I was pulled onto a Boeing continuation effort.</p>
          </div>

          <div class="modal-tl-item">
            <div class="modal-tl-dot"></div>
            <span class="modal-tl-date">March 2024</span>
            <span class="modal-tl-role">Mission Debrief Utility — Boeing DoD Continuation</span>
            <p>After the DoD Autonomy Architecture program ended, I moved onto a Boeing continuation effort focused on building tooling to replay and visualize recorded flight data from simulated missions in a 3D environment, so engineers could analyze what happened after the fact. Working with another developer, we containerized an AFSIM (Advanced Framework for Simulation, Integration, and Modeling) simulation environment with Docker, evaluated and selected EFK (Elasticsearch, Fluent Bit, and Kibana) as the real-time log aggregation solution for flight data, and began developing a custom C++ plugin to feed captured autonomy messages into the 3D replay viewer.</p>
            <p>The team's objectives were unclear and scope was undefined, which was creating real delivery risk. I put together a full program plan covering deliverables, schedule, and scope for all five members, which program leadership approved with minor edits. The program ended before it could be executed.</p>
          </div>

          <div class="modal-tl-item">
            <div class="modal-tl-dot"></div>
            <span class="modal-tl-date">June 2024</span>
            <span class="modal-tl-role">C++ DDS Monitoring Service — Aurora Internal Framework</span>
            <p>Before moving onto Boeing's Cascade program, I designed and built a backend C++ service to monitor inter-agent communication on Aurora's internal autonomy framework. The service implemented a distributed network of DDS (Data Distribution Service) subscribers that consumed and logged messages at 1Hz into a SQL database, with a REST API exposing the data to a Python frontend. I also containerized the service with Docker to streamline deployment.</p>
          </div>

          <div class="modal-tl-item">
            <div class="modal-tl-dot"></div>
            <span class="modal-tl-date">June 2024 – August 2024</span>
            <span class="modal-tl-role">Boeing <a href="https://cascade.boeing.com/" target="_blank">Cascade</a> Climate Impact Model</span>
            <p>I spent three months as a backend developer on Boeing's Cascade Climate Impact Model — an open-source core library that serves both an internal API and web app, and is distributed to external users who want to build on top of it directly. My day-to-day work involved refactoring, variable renames coordinated across teams, and minor bug patches to improve code quality and maintainability.</p>
            <p>The highlight was a two-week hackathon to find and fix inefficiencies across the codebase. I worked directly with the mathematician who originally designed the Non-CO2 module (a composition of models calculating the indirect atmospheric effects of commercial aircraft emissions like contrails and radiative forcing), using her math documentation to guide both performance improvements and correctness fixes. I restructured the program's design to eliminate redundant queries and recomputations, reduced large dataframe sizes being passed around, and standardized datatypes with consistent index labeling throughout. Runtime dropped from nearly 18 minutes to 4.3 seconds (a 99.6% improvement), and I won first place in the hackathon, unblocking the module for customer deployment. Aurora recognized my performance with an immediate recognition award. When I was rolled off, I handed off a documented list of remaining action items for the team to continue from.</p>
          </div>

          <div class="modal-tl-item">
            <div class="modal-tl-dot"></div>
            <span class="modal-tl-date">August 2024 – November 2025</span>
            <span class="modal-tl-role">Paradigm — Business Insights Optimization Tool for Sustainable Aviation</span>
            <p>My last and longest program was Paradigm — a Boeing-led initiative to build a data analysis platform and CP-SAT (Constraint Programming - Satisfiability) optimization framework for informing Boeing's sustainable aircraft technology selection. The optimizer solved a configurable version of the same core problem: given a target market (European routes, United's network, a global coverage threshold) and a selected alternative fuel technology, find the cost-minimizing sequence of airport infrastructure upgrades required to enable that technology across the network, and quantify the emissions savings those enablements would produce. The core optimizer used Google OR-Tools CP-SAT to solve across multiple objective functions simultaneously. The codebase had never been documented and was too complex to onboard new developers without it.</p>
            <p>The first priority was making the codebase accessible. The program's first comprehensive documentation suite covered the entire codebase (over 8,000 lines of Python) with docstrings, inline comments, type hinting, linting, and a README with user and developer instructions. Beyond the code itself, a separate conceptual documentation suite covered the problem statement, high-level vocabulary, system descriptions and diagrams, framework summaries, Monte Carlo sweep explanations, a class inheritance diagram for roughly 50 classes, input and output dataset explanations, current limitations, and an end-to-end example trade walkthrough. Aurora recognized this work with an immediate recognition award.</p>
            <p>From there my focus shifted to building out the platform. Starting in the existing Python/Dash stack, I built visualization and mapping tools that processed 2GB of data across multiple file formats. I identified that Dash wasn't a viable path to hosting the application on Boeing's internal servers and pushed to rebuild from scratch using modern full-stack technologies. I designed a custom PostgreSQL schema, migrated all the data into it, and built a React TypeScript frontend connected to a Python FastAPI backend — reproducing and extending the full feature set on a stack deployable on Boeing's internal servers. Working with the team lead, I built the frontend's mapping layer in Mapbox to visualize the optimizer's output as interactive geographic route networks, showing which airport upgrade combinations unlocked which route sets across each target market for a given technology scenario.</p>
            <p>The platform also became the foundation for external communication. I collaborated with a teammate to extend the CP-SAT decision model with time-dependent logic, allowing optimal technology selections to persist across multi-year planning horizons, then leveraged this enhanced model to build case studies for a Boeing sustainability workshop in Seattle. I drove the effort — identifying what insights to surface, collecting the data, and building the case studies, with light input from program management. The final presentation went to 25 engineers, many at the senior level, on how the model's enhanced decision-making capabilities could inform key technology investment decisions for sustainable aviation.</p>
          </div>

        </div>
      `,
      tags: ['Python', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'C++', 'Optimization', 'Constraint Programming', 'Data Visualization', 'Full-Stack Development', 'Systems Architecture', 'Technical Communication']
    },
    e4: {
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Completed the primary internship assignment within the first month — built LabVIEW GUIs to automate RF characterization data collection across multiple ADI technologies, including a two-tone intermodulation distortion measurement GUI; authored a ZCG (Zero Code GUI) tutorial guide adopted by other ADI RF testing teams</li>
          <li>Independently identified and automated the senior engineering team's manual test results analysis process while manager was on vacation — built MATLAB parsers that generated radiation performance reports, compiled thousands of raw data files into spreadsheets, and produced hundreds of plots for the design team, saving days of engineering effort per input analyzed</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/ADI.jpg" style="width:80%;display:block;margin:0 auto 1.1rem;border:1px solid var(--grid)" alt="ADI">
        <p>I joined ADI's Aerospace and Defense team as an RF (Radio Frequency) test engineering intern, with a primary assignment to standardize RF characterization data collection for new chips onto a single platform — Zero Code GUI (ZCG) by Soliton Technologies. After completing LabVIEW Core 1 and 2 training, I built GUIs (graphical user interfaces) in National Instruments LabVIEW to automate data collection across multiple ADI technologies, including a GUI to measure 2nd and 3rd order two-tone intermodulation distortion using two signal generators. I also authored a ZCG tutorial guide to help other ADI RF testing teams adopt the platform and contributed weekly UI improvement suggestions to the ZCG development team. I finished the entire assignment within my first month.</p>
        <p>With my manager on vacation for much of the summer, I spent the remaining time on a problem I had identified while going through the test results analysis process myself — it was slow and largely manual for the senior engineering team. I built several MATLAB programs to automate it: one parsed large datasets to generate radiation performance reports with tables of key statistics, and another sifted through thousands of raw data files to compile spreadsheets and hundreds of plots for the design team. My manager returned to find the work completed with a few days left in my internship. The automation saved the team days of engineering effort per input analyzed, and the accompanying MATLAB documentation left them equipped to tackle similar projects going forward.</p>
      `,
      tags: ['MATLAB', 'Signal Processing', 'Test Automation']
    },
    e3: {
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Identified ODRI's original electronics architecture as the primary driver of cost and capability constraints; proposed and led a full electrical redesign replacing it with the MicroDriver v2 and Master Board system — quadrupling communication capabilities and motor control bandwidth while reducing costs by over 91%</li>
          <li>Built out the technical documentation foundation for external collaborators: cost analysis, wiring schematics, circuit tutorials, and a bill of materials on <a href="https://github.com/EmiliaPsacharopoulos/Quadruped-8dof-Robot" target="_blank">GitHub</a></li>
          <li>Co-authored a research paper documenting the redesign and presented findings at Michigan's SURE symposium</li>
        
        </ul>
      `,
      html: `
        <img src="/assets/images/SURE_Poster.jpg" style="width:100%;margin-bottom:1.1rem;border:1px solid var(--grid)" alt="SURE Poster">
        <p>The <a href="https://open-dynamic-robot-initiative.github.io/" target="_blank">Open Dynamic Robot Initiative (ODRI)</a> is an open-source research effort to develop a low-cost quadruped robot as a platform for researchers worldwide to build and test control systems on — the goal being to lower the financial and educational barriers that have historically made robotics research inaccessible. I was one of two undergraduates selected to join the interdisciplinary research team through <a href="https://sure.engin.umich.edu/" target="_blank">Michigan's SURE (Summer Undergraduate Research in Engineering) program</a>.</p>
        <p>My first contribution was improving the technical foundation for other collaborators: conducting a statistical cost analysis, creating wiring schematics, assembling circuit tutorials, and compiling a bill of materials on <a href="https://github.com/EmiliaPsacharopoulos/Quadruped-8dof-Robot" target="_blank">GitHub</a> to track research progress. From there I identified that ODRI's original electronics architecture, built around TI evaluation boards requiring separate hardware per motor pair connected to the host PC via CAN, was the primary driver of both cost and capability constraints, and proposed replacing it with the MicroDriver v2 and Master Board system. I led the electrical redesign, reworking the robot's circuitry, computing, communication, and motor control systems: the Master Board manages all motor drivers simultaneously over a high-speed SPI bus and adds WiFi and Ethernet communication to the host PC in place of CAN, quadrupling communication capabilities and motor control bandwidth while reducing costs by over 91%. We documented the mechanical and electrical redesigns in a research paper and presented our findings at Michigan's SURE symposium.</p>
      `,
      tags: ['Robotics', 'Hardware Design', 'Electrical Design']
    },
    e2: {
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Compiled and synthesized hundreds of testing documents into executive summaries conveying key Lessons Learned to Navy leadership in the Unmanned Maritime Systems Program Office (PMS 406)</li>
          <li>Collaborated with senior engineers to organize a multi-day leadership conference for Unmanned Undersea Vehicle (UUV) Homeport program managers</li>
          <li>Recognized for exceptional communication and documentation skills by the Strategic Capabilities Office (SCO)</li>
        </ul>
      `,
      html: `
        <p>I joined the Navy's Unmanned Maritime Systems Program Office (PMS 406) after my freshman year of college — the internship was originally intended to be in-person at the Navy Yard but moved remote due to COVID. My primary work was independently synthesizing hundreds of testing documents into executive summaries conveying key lessons learned, which went directly to Navy leadership within PMS 406. I also collaborated with senior engineers to organize a multi-day leadership conference for UUV (Unmanned Undersea Vehicle) Homeport program managers. The Strategic Capabilities Office recognized my communication and documentation work informally at the end of the summer, and PMS 406 liked my work enough to offer a part-time continuation into my sophomore year, which I accepted.</p>
      `,
      tags: ['Technical Writing', 'Communication']
    },
    e1: {
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Took an unpaid internship before college to get firsthand exposure to engineering research; supported PhD students studying <a href="https://technologies.research.gwu.edu/technology/45714#:~:text=Researchers%20at%20GW%20have%20invented,of%20ice%20in%20various%20surfaces." target="_blank">hydrophobic aluminum treatment methods</a> for arctic-bound container ship hulls</li>
          <li>Designed and built an experiment at the end of the summer to test how different phase change materials retained heat under varying ambient conditions, using lab facilities and materials from the PhD team's own research</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/gwu.png" style="width:100%;border:1px solid var(--grid);margin-bottom:1.1rem" alt="GWU Internship">
        <p>The summer before starting college I took an unpaid internship at a mechanical engineering research lab at George Washington University — mostly to get a firsthand sense of what research actually looks like before deciding how much to pursue it in college. The day-to-day was unglamorous: compiling notes from research papers, washing labware, preparing samples, and taking observations during experiments run by PhD students studying <a href="https://technologies.research.gwu.edu/technology/45714#:~:text=Researchers%20at%20GW%20have%20invented,of%20ice%20in%20various%20surfaces." target="_blank">hydrophobic aluminum treatment methods</a> to prevent hull cracking in container ships bound for arctic regions.</p>
        <p>At the end of the summer the team gave me free rein to pick a topic related to the research and use the lab facilities to explore it. I designed and built a metal block with a grid of drilled cavities to test how different phase change materials (materials the PhD students were evaluating) retained heat under varying ambient conditions. The experiment involved heating the block for a set duration, then measuring how long each material held its temperature once removed from the heat source.</p>
      `,
      tags: ['Experimental Design', 'Materials Science']
    },
  },
  eduMeta: {
    e0: { jobTitle: 'Director of Music & Guitar Tutor', company: 'Seven Mile', location: 'Detroit, MI', dates: 'Sep 2019 — May 2023', tagline: '', website: 'https://www.umsevenmile.org/' }
  },
  edu: {
    e0: {
      htmlShort: `
        <ul style="font-size:0.9rem;line-height:1.8;color:var(--muted);padding-left:1.2rem">
          <li>Tutored guitar to Detroit students through a <a href="https://www.umsevenmile.org/" target="_blank">University of Michigan nonprofit</a> providing free music education in underserved communities, freshman through senior year</li>
          <li>As Director of Music, coordinated tutor and student attendance across multiple locations, managed financial expenditures, and planned end-of-term public showcases giving students a real performance experience</li>
        </ul>
      `,
      html: `
        <img src="/assets/images/sevenMile.jpg" style="width:100%;margin-bottom:0.5rem;border:1px solid var(--grid)" alt="Seven Mile">
        <p>I started tutoring guitar at <a href="https://www.umsevenmile.org/" target="_blank">Seven Mile</a> during my freshman year of college because I resonated with their mission of providing equal access to arts education in underserved communities. A few hours a week watching students grow, as musicians and as people, was one of the most rewarding parts of my time in college.</p>
        <p>In my senior year, I stepped into the Director of Music role to get more involved. That meant coordinating tutor and student attendance across multiple locations, managing financial expenditures, and planning public musical showcases at the end of each term where students could perform for their communities. The showcases were the highlight of each term, bringing together tutors, students, and venues to give students a real performance experience and a chance to celebrate their progress.</p>
      `,
      tags: ['Leadership', 'Program Management', 'Mentorship', 'Music Education']
    }
  }
};
