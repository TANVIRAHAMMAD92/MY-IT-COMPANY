function showPage(page){

    const pages = {
overview: `
<section class="overview-section">

    <div class="overview-header">
        <h2>🚀 Welcome to My IT Company</h2>
        <p>
            We empower businesses with innovative technology solutions,
            helping them grow faster, smarter, and more efficiently in the
            digital world.
        </p>
    </div>

    <div class="stats-container">
        <div class="stat-card">
            <h3>150+</h3>
            <p>Completed Projects</p>
        </div>

        <div class="stat-card">
            <h3>100+</h3>
            <p>Happy Clients</p>
        </div>

        <div class="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
        </div>

        <div class="stat-card">
            <h3>24/7</h3>
            <p>Technical Support</p>
        </div>
    </div>

    <div class="service-features">

        <div class="feature-card">
            <i class="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>
                Responsive websites, e-commerce platforms,
                and custom web applications.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Mobile Apps</h3>
            <p>
                Android and iOS applications designed for
                performance and user experience.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Digital Marketing</h3>
            <p>
                SEO, social media marketing, and online
                branding strategies to increase visibility.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-headset"></i>
            <h3>24/7 IT Support</h3>
            <p>
                Continuous monitoring, maintenance,
                and technical assistance.
            </p>
        </div>

    </div>

</section>
`,

        features: `
    <h2>Features</h2>
    <p>
    Discover the key advantages that make our company a trusted technology partner for businesses and organizations.
    </p>

    <div class="service-features">
        <div class="feature-card">
            <h3>👨‍💻 Professional Team</h3>
            <p>Experienced developers, designers, and IT specialists dedicated to delivering quality solutions.</p>
        </div>

        <div class="feature-card">
            <h3>🕒 24/7 Support</h3>
            <p>Round-the-clock technical assistance and customer support whenever you need help.</p>
        </div>

        <div class="feature-card">
            <h3>🔒 Secure Solutions</h3>
            <p>Advanced security practices to protect your data, systems, and business operations.</p>
        </div>

        <div class="feature-card">
            <h3>⚡ Fast Delivery</h3>
            <p>Efficient project management and development processes to ensure timely completion.</p>
        </div>
    </div>
`,

testimonials: `
<h2>💬 Client Testimonials</h2>
<p>Trusted by businesses and organizations.</p>

<div class="testimonial-container">

    <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=1" alt="">
        <p>
        "Excellent service and professional support.
        Highly recommended!"
        </p>
        <h4>John Smith</h4>
        <span>CEO, Tech Solutions</span>
    </div>

    <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=5" alt="">
        <p>
        "Their team delivered our project on time
        with outstanding quality."
        </p>
        <h4>Sarah Johnson</h4>
        <span>Marketing Manager</span>
    </div>

    <div class="testimonial-card">
        <img src="https://i.pravatar.cc/100?img=8" alt="">
        <p>
        "Very reliable company with great customer support."
        </p>
        <h4>Michael Brown</h4>
        <span>Business Owner</span>
    </div>

</div>
`,


       faq: `
    <h2>Frequently Asked Questions</h2>
    <div class="faq-container">

        <div class="faq-item">
            <h3>Q: What services do you provide?</h3>
            <p>A: We provide Web Development, Digital Marketing, Graphic Design, SEO, and IT Support services.</p>
        </div>

        <div class="faq-item">
            <h3>Q: How long does it take to complete a project?</h3>
            <p>A: Project duration depends on the scope and complexity. Most projects are completed within 1–6 weeks.</p>
        </div>

        <div class="faq-item">
            <h3>Q: Do you provide website maintenance?</h3>
            <p>A: Yes, we offer ongoing website maintenance, updates, security monitoring, and technical support.</p>
        </div>

        <div class="faq-item">
            <h3>Q: Can you redesign an existing website?</h3>
            <p>A: Absolutely! We can redesign and modernize your current website to improve performance and user experience.</p>
        </div>

        <div class="faq-item">
            <h3>Q: How can I contact your team?</h3>
            <p>A: You can contact us through our Contact page, email, phone, or social media channels.</p>
        </div>

    </div>
`,

       about: `
    <h2><i class="fas fa-building"></i> About Us</h2>

    <p>
        My IT Company is a leading technology solutions provider dedicated
        to helping businesses grow through innovation, creativity, and
        cutting-edge digital solutions.
    </p>

    <div class="service-features">

        <div class="feature-card">
            <i class="fas fa-code feature-icon"></i>
            <h3>Web Development</h3>
            <p>
                We build modern, responsive, and high-performance websites
                tailored to your business needs.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-bullhorn feature-icon"></i>
            <h3>Digital Marketing</h3>
            <p>
                Our marketing strategies help businesses increase visibility,
                generate leads, and grow online.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-headset feature-icon"></i>
            <h3>IT Support</h3>
            <p>
                Reliable technical support and maintenance services to keep
                your systems running smoothly.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-lightbulb feature-icon"></i>
            <h3>Innovation</h3>
            <p>
                We leverage the latest technologies and creative solutions
                to help clients stay ahead of the competition.
            </p>
        </div>

    </div>

    <div class="about-stats">
        <div class="stat-card">
            <h3>100+</h3>
            <p>Projects Completed</p>
        </div>

        <div class="stat-card">
            <h3>50+</h3>
            <p>Happy Clients</p>
        </div>

        <div class="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
        </div>
    </div>
`,

      mission: `
    <h2><i class="fas fa-bullseye"></i> Mission & Vision</h2>

    <p>
        We are committed to helping businesses succeed through innovative
        technology solutions, strategic thinking, and exceptional customer service.
    </p>

    <div class="service-features">

        <div class="feature-card">
            <i class="fas fa-rocket feature-icon"></i>
            <h3>Our Mission</h3>
            <p>
                To empower businesses with reliable, innovative, and
                cost-effective technology solutions that drive growth,
                efficiency, and digital transformation.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-eye feature-icon"></i>
            <h3>Our Vision</h3>
            <p>
                To become a globally trusted IT partner recognized for
                excellence, innovation, and delivering outstanding value
                to our clients.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-handshake feature-icon"></i>
            <h3>Our Values</h3>
            <p>
                Integrity, innovation, teamwork, and customer satisfaction
                are the core values that guide everything we do.
            </p>
        </div>

    </div>

    <div class="about-stats">

        <div class="stat-card">
            <h3>100+</h3>
            <p>Successful Projects</p>
        </div>

        <div class="stat-card">
            <h3>50+</h3>
            <p>Happy Clients</p>
        </div>

        <div class="stat-card">
            <h3>24/7</h3>
            <p>Client Support</p>
        </div>

    </div>
`,
        story: `
<section class="story-section">

    <div class="story-header">
        <h2>📖 Our Story</h2>
        <p>
            Our journey began with a simple vision: to help businesses
            embrace technology and achieve digital success.
        </p>
    </div>

    <div class="timeline">

        <div class="timeline-item">
            <span>2021</span>
            <h3>Company Founded</h3>
            <p>
                Started as a small team of passionate developers and designers.
            </p>
        </div>

        <div class="timeline-item">
            <span>2022</span>
            <h3>First 50 Clients</h3>
            <p>
                Successfully delivered websites and digital solutions for businesses.
            </p>
        </div>

        <div class="timeline-item">
            <span>2024</span>
            <h3>Service Expansion</h3>
            <p>
                Added Mobile App Development, SEO, and Digital Marketing services.
            </p>
        </div>

        <div class="timeline-item">
            <span>2026</span>
            <h3>Growing Strong</h3>
            <p>
                Continuing to provide innovative and reliable IT solutions worldwide.
            </p>
        </div>

    </div>

</section>
`,
        achievement: `
<section class="achievement-section">

    <div class="section-title">
        <h2>🏆 Our Achievements</h2>
        <p>
            We are proud of our accomplishments and the trust our clients place in us.
        </p>
    </div>

    <div class="achievement-container">

        <div class="achievement-card">
            <i class="fas fa-project-diagram"></i>
            <h3 class="counter" data-target="100">0</h3>
            <p>Projects Completed</p>
        </div>

        <div class="achievement-card">
            <i class="fas fa-smile"></i>
            <h3 class="counter" data-target="50">0</h3>
            <p>Happy Clients</p>
        </div>

        <div class="achievement-card">
            <i class="fas fa-headset"></i>
            <h3>24/7</h3>
            <p>Technical Support</p>
        </div>

        <div class="achievement-card">
            <i class="fas fa-award"></i>
            <h3 class="counter" data-target="10">0</h3>
            <p>Industry Awards</p>
        </div>

    </div>

</section>
`,

      web: `
<section class="service-section">

    <div class="service-header">
        <h2>🌐 Web Development</h2>
        <p>
            We create responsive, modern, fast and secure websites
            tailored to your business goals and customer needs.
        </p>
    </div>

    <div class="service-cards">

        <div class="service-card">
            <i class="fas fa-laptop-code"></i>
            <h3>Custom Websites</h3>
            <p>Professional business and portfolio websites.</p>
        </div>

        <div class="service-card">
            <i class="fas fa-shopping-cart"></i>
            <h3>E-Commerce</h3>
            <p>Online stores with secure payment integration.</p>
        </div>

        <div class="service-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Perfect display on mobile, tablet and desktop.</p>
        </div>

        <div class="service-card">
            <i class="fas fa-shield-alt"></i>
            <h3>Secure Solutions</h3>
            <p>Advanced security and performance optimization.</p>
        </div>

    </div>

    <div class="service-stats">
        <div>
            <h3>100+</h3>
            <p>Web Projects</p>
        </div>

        <div>
            <h3>50+</h3>
            <p>Clients Served</p>
        </div>

        <div>
            <h3>99%</h3>
            <p>Client Satisfaction</p>
        </div>
    </div>

</section>
`,
   marketing: `
<section class="marketing-section">

    <div class="section-title">
        <h2>📈 Digital Marketing</h2>
        <p>
            Grow your business with powerful digital marketing strategies,
            targeted campaigns, and data-driven results.
        </p>
    </div>

    <div class="service-features">

        <div class="feature-card">
            <i class="fas fa-search"></i>
            <h3>SEO Optimization</h3>
            <p>
                Improve search rankings and increase organic website traffic.
            </p>
        </div>

        <div class="feature-card">
            <i class="fab fa-facebook"></i>
            <h3>Social Media Marketing</h3>
            <p>
                Reach and engage customers through social media platforms.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Online Branding</h3>
            <p>
                Build a strong brand identity and increase online visibility.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-pen-fancy"></i>
            <h3>Content Marketing</h3>
            <p>
                Create high-quality content that attracts and converts customers.
            </p>
        </div>

    </div>

    <div class="marketing-stats">

        <div class="stat-box">
            <h3>500K+</h3>
            <p>Audience Reached</p>
        </div>

        <div class="stat-box">
            <h3>200+</h3>
            <p>Marketing Campaigns</p>
        </div>

        <div class="stat-box">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
        </div>

        <div class="stat-box">
            <h3>50+</h3>
            <p>Brands Promoted</p>
        </div>

    </div>

</section>
`,
       support: `
    <h2>IT Support</h2>
    <p>
        Our dedicated IT support team is available 24/7 to ensure your systems run smoothly and efficiently.
        We provide technical assistance, system maintenance, software troubleshooting, network management,
        security monitoring, and rapid issue resolution to minimize downtime and maximize productivity.
    </p>

    <div class="support-features">
        <div class="support-card">
            <h3>🖥 Technical Assistance</h3>
            <p>Quick solutions for software, hardware, and system-related issues.</p>
        </div>

        <div class="support-card">
            <h3>🌐 Network Management</h3>
            <p>Reliable network setup, monitoring, and troubleshooting services.</p>
        </div>

        <div class="support-card">
            <h3>🔒 Security Support</h3>
            <p>Protection against cyber threats with regular security updates and monitoring.</p>
        </div>

        <div class="support-card">
            <h3>⚡ 24/7 Availability</h3>
            <p>Round-the-clock support to keep your business running without interruption.</p>
        </div>
    </div>
`,
        webproject: `
    <h2>Web Projects</h2>

    <p>
        We develop modern, responsive, and high-performance web solutions tailored to business needs.
        Our expertise includes corporate websites, e-commerce platforms, educational portals, and custom web applications.
    </p>

    <div class="project-container">

        <div class="project-card">
            <h3>🏢 Corporate Websites</h3>
            <p>Professional websites designed to strengthen your brand identity and online presence.</p>
        </div>

        <div class="project-card">
            <h3>🛒 E-Commerce Platforms</h3>
            <p>Secure online stores with product management, payment integration, and order tracking.</p>
        </div>

        <div class="project-card">
            <h3>🎓 Educational Portals</h3>
            <p>Interactive platforms for schools, colleges, and training institutes.</p>
        </div>

        <div class="project-card">
            <h3>⚙️ Custom Web Applications</h3>
            <p>Tailor-made web systems that automate business processes and improve productivity.</p>
        </div>

    </div>
`,
appproject: `
    <h2>📱 App Projects</h2>

    <p>
        We develop innovative mobile applications for Android and iOS
        platforms that deliver exceptional user experiences and business value.
    </p>

    <div class="service-features">

        <div class="feature-card">
            <h3>📲 Android Apps</h3>
            <p>Custom Android applications built for performance and scalability.</p>
        </div>

        <div class="feature-card">
            <h3>🍎 iOS Apps</h3>
            <p>Professional iPhone and iPad applications with modern UI design.</p>
        </div>

        <div class="feature-card">
            <h3>☁️ Cloud Integration</h3>
            <p>Secure cloud connectivity and real-time data synchronization.</p>
        </div>

        <div class="feature-card">
            <h3>🚀 App Maintenance</h3>
            <p>Continuous updates, optimization, and technical support.</p>
        </div>

    </div>
`,
designproject: `
<section class="projects">

    <div class="section-title">
        <h2>🎨 Design Projects</h2>
        <p>
            Creative and visually appealing designs that help brands stand out.
        </p>
    </div>

    <div class="project-container">

        <div class="project-card">
            <i class="fas fa-palette"></i>
            <h3>Logo Design</h3>
            <p>
                Unique and memorable logo designs for businesses and startups.
            </p>
        </div>

        <div class="project-card">
            <i class="fas fa-image"></i>
            <h3>Banner Design</h3>
            <p>
                Professional banners for websites, social media, and advertising.
            </p>
        </div>

        <div class="project-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Marketing Materials</h3>
            <p>
                Flyers, brochures, posters, and promotional graphics.
            </p>
        </div>

        <div class="project-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>UI/UX Design</h3>
            <p>
                Modern user interfaces and user experiences for web and mobile apps.
            </p>
        </div>

    </div>

</section>
`,

     otherproject: `
    <h2>Other Projects</h2>
    <p>
    Innovative custom software and automation solutions designed to improve
    efficiency and accelerate business growth.
    </p>

    <div class="stats-row">
        <div class="stat-box">
            <h3>50+</h3>
            <p>Projects Completed</p>
        </div>

        <div class="stat-box">
            <h3>30+</h3>
            <p>Business Clients</p>
        </div>

        <div class="stat-box">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
        </div>
    </div>

    <div class="service-features">
        <div class="feature-card">
            <h3>⚙️ Custom Software</h3>
            <p>Tailor-made applications built specifically for your business needs.</p>
        </div>

        <div class="feature-card">
            <h3>🤖 Process Automation</h3>
            <p>Automate repetitive workflows and save valuable time.</p>
        </div>

        <div class="feature-card">
            <h3>🗄️ Database Systems</h3>
            <p>Secure and scalable database management solutions.</p>
        </div>

        <div class="feature-card">
            <h3>🔗 System Integration</h3>
            <p>Connect multiple platforms and services into one ecosystem.</p>
        </div>
    </div>
`,

    leadership: `
    <h2>Leadership Team</h2>
    <p>
    Our leadership team brings years of industry experience, strategic vision,
    and a commitment to excellence. They guide our company in delivering
    innovative solutions, fostering growth, and building long-term client relationships.
    </p>

    <div class="service-features">
        <div class="feature-card">
            <h3>🎯 Strategic Vision</h3>
            <p>Setting clear goals and driving the company toward sustainable success.</p>
        </div>

        <div class="feature-card">
            <h3>🤝 Team Management</h3>
            <p>Leading and inspiring teams to achieve outstanding performance and innovation.</p>
        </div>

        <div class="feature-card">
            <h3>📈 Business Growth</h3>
            <p>Developing strategies that expand opportunities and strengthen market presence.</p>
        </div>

        <div class="feature-card">
            <h3>💡 Innovation Leadership</h3>
            <p>Encouraging creativity and adopting modern technologies to stay ahead.</p>
        </div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h3>10+</h3>
            <p>Years Experience</p>
        </div>

        <div class="stat-box">
            <h3>100+</h3>
            <p>Projects Led</p>
        </div>

        <div class="stat-box">
            <h3>50+</h3>
            <p>Team Members</p>
        </div>
    </div>
`,

     development: `
<section class="development-section">

    <div class="section-title">
        <h2>💻 Development Team</h2>
        <p>
            Our skilled developers build innovative, scalable, and secure
            digital solutions that help businesses grow in the modern world.
        </p>
    </div>

    <div class="service-features">

        <div class="feature-card">
            <i class="fas fa-code"></i>
            <h3>Web Developers</h3>
            <p>
                Creating responsive, fast, and SEO-friendly websites
                using modern technologies.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Mobile App Developers</h3>
            <p>
                Building Android and iOS applications with smooth
                performance and user-friendly interfaces.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-server"></i>
            <h3>Backend Engineers</h3>
            <p>
                Developing secure APIs, databases, and server-side
                systems for enterprise solutions.
            </p>
        </div>

        <div class="feature-card">
            <i class="fas fa-shield-alt"></i>
            <h3>Quality Assurance</h3>
            <p>
                Testing and optimizing applications to ensure
                reliability, security, and performance.
            </p>
        </div>

    </div>

    <div class="team-stats">

        <div class="stat-box">
            <h3>25+</h3>
            <p>Developers</p>
        </div>

        <div class="stat-box">
            <h3>100+</h3>
            <p>Projects Delivered</p>
        </div>

        <div class="stat-box">
            <h3>50+</h3>
            <p>Happy Clients</p>
        </div>

        <div class="stat-box">
            <h3>99%</h3>
            <p>Success Rate</p>
        </div>

    </div>

</section>
`,

       marketingteam: `
    <h2>Marketing Team</h2>
    <p>
    Our marketing team specializes in creating powerful digital strategies
    that increase brand awareness, generate leads, and drive business growth
    through innovative marketing solutions.
    </p>

    <div class="service-features">
        <div class="feature-card">
            <h3>🔍 SEO Specialists</h3>
            <p>Improving search engine rankings and increasing organic website traffic.</p>
        </div>

        <div class="feature-card">
            <h3>📱 Social Media Experts</h3>
            <p>Managing social media campaigns that engage audiences and build communities.</p>
        </div>

        <div class="feature-card">
            <h3>🎨 Branding Professionals</h3>
            <p>Creating strong brand identities that leave a lasting impression.</p>
        </div>

        <div class="feature-card">
            <h3>📊 Marketing Analysts</h3>
            <p>Using data-driven insights to optimize campaigns and maximize results.</p>
        </div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h3>200+</h3>
            <p>Campaigns Managed</p>
        </div>

        <div class="stat-box">
            <h3>100+</h3>
            <p>Happy Clients</p>
        </div>

        <div class="stat-box">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
        </div>
    </div>
`,

      jointeam: `
    <h2>Join Our Team</h2>
    <p>
    Become part of our growing team and build your career with passionate
    professionals. We value creativity, innovation, teamwork, and continuous
    learning while working on exciting projects for clients worldwide.
    </p>

    <div class="service-features">
        <div class="feature-card">
            <h3>🚀 Career Growth</h3>
            <p>Opportunities to learn new technologies and advance your professional career.</p>
        </div>

        <div class="feature-card">
            <h3>🤝 Team Collaboration</h3>
            <p>Work with talented developers, designers, and marketing experts in a supportive environment.</p>
        </div>

        <div class="feature-card">
            <h3>📚 Learning & Development</h3>
            <p>Access training resources, mentorship, and hands-on project experience.</p>
        </div>

        <div class="feature-card">
            <h3>💼 Flexible Opportunities</h3>
            <p>Explore full-time, part-time, internship, and remote work opportunities.</p>
        </div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h3>20+</h3>
            <p>Open Positions</p>
        </div>

        <div class="stat-box">
            <h3>50+</h3>
            <p>Team Members</p>
        </div>

        <div class="stat-box">
            <h3>100%</h3>
            <p>Growth Focused</p>
        </div>
    </div>

    <div style="margin-top:30px;text-align:center;">
        <a href="#" class="join-btn">Apply Now</a>
    </div>
`,

        contactus: `
    <h2>Contact Us</h2>
    
    <p>
        We'd love to hear from you. Feel free to contact us for any inquiries, project discussions, or technical support.
    </p>

    <div class="contact-details">
        <p><strong>📧 Email:</strong> info@myitcompany.com</p>
        <p><strong>📞 Phone:</strong> +880 1234-567890</p>
        <p><strong>📍 Address:</strong> Dhaka, Bangladesh</p>
        <p><strong>🕒 Office Hours:</strong> Saturday - Thursday, 9:00 AM - 6:00 PM</p>
    </div>

    <button class="contact-btn">Send Inquiry</button>
`,

      supportcenter: `
    <h2>Support Center</h2>
    <p>
    Our dedicated support team is ready to assist you with technical issues,
    troubleshooting, maintenance, and customer service inquiries.
    </p>

    <div class="service-features">
        <div class="feature-card">
            <h3>🎧 Technical Support</h3>
            <p>Get expert assistance for software, hardware, and system-related issues.</p>
        </div>

        <div class="feature-card">
            <h3>⚡ Quick Response</h3>
            <p>Fast and reliable solutions to minimize downtime and keep your business running.</p>
        </div>

        <div class="feature-card">
            <h3>🔒 Security Assistance</h3>
            <p>Support for security updates, monitoring, and protection against threats.</p>
        </div>

        <div class="feature-card">
            <h3>🌐 Remote Support</h3>
            <p>Receive professional assistance remotely from anywhere at any time.</p>
        </div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h3>24/7</h3>
            <p>Support Available</p>
        </div>

        <div class="stat-box">
            <h3>500+</h3>
            <p>Issues Resolved</p>
        </div>

        <div class="stat-box">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
        </div>
    </div>
`,

       quote: `
    <h2>Get a Quote</h2>
    <p>
    Tell us about your project requirements and receive a customized quote
    tailored to your business needs. Our team will review your request and
    provide the best solution within your budget and timeline.
    </p>

    <div class="service-features">
        <div class="feature-card">
            <h3>💻 Web Development</h3>
            <p>Custom websites, e-commerce stores, and web applications.</p>
        </div>

        <div class="feature-card">
            <h3>📱 Mobile Applications</h3>
            <p>Android and iOS apps designed for performance and user experience.</p>
        </div>

        <div class="feature-card">
            <h3>🎨 UI/UX & Design</h3>
            <p>Creative branding, graphics, and user interface design services.</p>
        </div>

        <div class="feature-card">
            <h3>📈 Digital Marketing</h3>
            <p>SEO, social media marketing, and online branding solutions.</p>
        </div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h3>24H</h3>
            <p>Response Time</p>
        </div>

        <div class="stat-box">
            <h3>100+</h3>
            <p>Projects Delivered</p>
        </div>

        <div class="stat-box">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
        </div>
    </div>

    <div style="margin-top:30px;text-align:center;">
        <a href="#" class="join-btn">Request Quote</a>
    </div>
`,

     location: `
    <h2>📍 Office Location</h2>
    <p>
        Our headquarters is based in Dhaka, Bangladesh, serving clients across the globe with innovative IT solutions.
    </p>

    <div class="location-info">
        <p><strong>📌 Address:</strong> Dhaka, Bangladesh</p>
        <p><strong>🕒 Hours:</strong> Saturday - Thursday | 9:00 AM - 6:00 PM</p>
        <p><strong>📞 Contact:</strong> +880 1234-567890</p>
    </div>
`,

    };

    document.getElementById("content-area").innerHTML = pages[page];
}
function searchContent() {
    let keyword = document.getElementById("searchInput").value.toLowerCase().trim();

    if (keyword.includes("about")) {
        showPage("about");
    } 
    else if (keyword.includes("overview")) {
        showPage("overview");
    }
    else if (keyword.includes("mission")) {
        showPage("mission");
    }
    else if (keyword.includes("story")) {
        showPage("story");
    }
    else if (keyword.includes("achievement")) {
        showPage("achievement");
    }
    else if (keyword.includes("web")) {
        showPage("web");
    }
    else if (keyword.includes("marketing")) {
        showPage("marketing");
    }
    else if (keyword.includes("support")) {
        showPage("supportcenter");
    }
    else if (keyword.includes("location")) {
        showPage("location");
    }
    else if (keyword.includes("contact")) {
        showPage("contactus");
    }
    else {
        document.getElementById("content-area").innerHTML =
        "<h2>No Result Found</h2><p>Please try another keyword.</p>";
        console.log("Search Loaded");
    }
}

