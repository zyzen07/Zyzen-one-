/*
 * Prashiskshan - Core JavaScript for dynamic content and interactions
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Login Functionality ---
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.modal .close-btn');

    if (loginBtn && loginModal && closeBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // --- Hamburger Menu Functionality ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navOverlay = document.getElementById('navOverlay');
    const closeHamburgerBtn = document.querySelector('.close-hamburger');

    if (hamburgerBtn && navOverlay && closeHamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            navOverlay.classList.add('open');
        });

        closeHamburgerBtn.addEventListener('click', () => {
            navOverlay.classList.remove('open');
        });
        
        navOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navOverlay.classList.remove('open');
            });
        });
    }

    // --- Dynamic Content Data ---
    const programsData = [
        { icon: 'fas fa-chalkboard-teacher', title: 'Curated Courses', description: 'Structured learning paths for in-demand skills.' },
        { icon: 'fas fa-file-alt', title: 'Resume & Portfolio Building', description: 'Tools and workshops to create a compelling professional profile.' },
        { icon: 'fas fa-users', title: 'Industry Workshops', description: 'Hands-on sessions led by experts on real-world challenges.' },
        { icon: 'fas fa-compass', title: 'Personalized Career Guidance', description: '1-on-1 mentorship to navigate your career path.' }
    ];

    const coursesData = [
        { img: 'assets/img/company-logos/fullstack1.png', title: 'Full Stack Web Development', description: 'Master MERN stack development for modern web applications.', tags: ['React', 'Node.js', 'MongoDB'] },
        { img: 'assets/img/company-logos/datascience.png', title: 'Introduction to Data Science', description: 'Learn Python, Pandas, and basic machine learning algorithms.', tags: ['Python', 'Pandas', 'ML'] },
        { img: 'assets/img/company-logos/digital.png', title: 'Digital Marketing Fundamentals', description: 'Understand SEO, SEM, Social Media, and Content Marketing.', tags: ['SEO', 'Social Media', 'Marketing'] },
        { img: 'assets/img/company-logos/ui.png', title: 'UI/UX Design Basics', description: 'Create user-centric designs with Figma and Sketch.', tags: ['Figma', 'UI Design', 'UX'] },
        { img: 'assets/img/company-logos/cloud.png', title: 'Cloud Computing with AWS', description: 'Explore AWS services for scalable and robust cloud solutions.', tags: ['AWS', 'Cloud', 'DevOps'] },
    ];

    const mentorsData = [
        // CORRECTED PATH: added 'company-logos/'
        { img:'assets/img/company-logos/selva1.jpg', name: 'Mr. Selva Vishnu', field: ' Full Stack Engineer', experience:5, company: 'Innovate Solutions' },
        { img:'assets/img/company-logos/santhosh1.jpg', name: 'Mr. Santhosh Kumar', field: 'Software Engineering', experience: 8, company: 'TechCorp' },
        { img:'assets/img/company-logos/sudhar2.png', name: 'Mr. Sudharsan', field: 'UX Design', experience: 6, company: 'Fitngrow' },
        { img:'assets/img/company-logos/ranjith1.jpg', name: 'Mr. Ranjith', field: 'AI/ML engineer', experience: 3, company: 'cor tech' },
        { img:'assets/img/company-logos/sivakumar.jpg', name: 'Dr. Sneha Patil', field: 'Financial Analysis', experience: 10, company: 'Apex Finance' },
    ];
    const mentorsForCarousel = [...mentorsData, ...mentorsData];

    const companyLogos = ['cisco', 'flipkart', 'amazon', 'juniper', 'tcs', 'wipro', 'infosis', 'zoho', 'dell', 'jio', 'nasdaq'];
    const logosForCarousel = [...companyLogos, ...companyLogos]; // Duplicate the array for a seamless loop

    const internships = [
        { title: 'Full Stack Developer Intern', company: 'Innovate Solutions', location: 'Bangalore', duration: '6 months', stipend: '₹15,000/month', skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'], industry: 'IT' },
        { title: 'Data Science Intern', company: 'Data Insights Co.', location: 'Pune', duration: '3 months', stipend: '₹12,000/month', skills: ['Python', 'Pandas', 'Machine Learning'], industry: 'IT' },
        { title: 'Financial Analyst Intern', company: 'Apex Finance', location: 'Remote', duration: '4 months', stipend: '₹10,000/month', skills: ['Excel', 'Financial Modeling', 'Data Analysis'], industry: 'Finance' },
        { title: 'UI/UX Design Intern', company: 'Creative Hub', location: 'Bangalore', duration: '5 months', stipend: '₹10,000/month', skills: ['Figma', 'Sketch', 'Prototyping'], industry: 'IT' },
        { title: 'Digital Marketing Intern', company: 'Market Growth', location: 'Pune', duration: '3 months', stipend: '₹8,000/month', skills: ['SEO', 'SEM', 'Social Media Marketing'], industry: 'Marketing' },
        { title: 'Healthcare IT Intern', company: 'HealthTech Inc.', location: 'Mumbai', duration: '6 months', stipend: '₹14,000/month', skills: ['SQL', 'Data Security', 'EHR Systems'], industry: 'Healthcare' },
        { title: 'Civil Engineering Intern', company: 'Construct Co.', location: 'Delhi', duration: '6 months', stipend: '₹18,000/month', skills: ['AutoCAD', 'Structural Analysis', 'Project Management'], industry: 'Engineering' }
    ];

    const applications = [
        { title: 'Full Stack Developer Intern', company: 'Innovate Solutions', status: 'offer' },
        { title: 'Data Science Intern', company: 'Data Insights Co.', status: 'applied' },
        { title: 'UI/UX Design Intern', company: 'Creative Hub', status: 'review' },
        { title: 'Financial Analyst Intern', company: 'Apex Finance', status: 'rejected' },
        { title: 'Digital Marketing Intern', company: 'Market Growth', status: 'applied' }
    ];

    const studentData = {
        name: 'Akash Sharma',
        college: 'Government College of Engineering, Jammu',
        department: 'Computer Science and Engineering',
        batch: '2021-2025',
        email: 'akash.sharma@example.edu',
        phone: '+91 98765 43210',
        location: 'Jammu and Kashmir, India',
        cgpa: '8.5/10',
        currentSemester: '5',
        skills: ['Web Development', 'Data Structures', 'Python', 'Machine Learning']
    };

    const logbookEntries = [
        { title: 'Week 1: Introduction to Framework', description: 'Learned about the company\'s tech stack and was assigned to a minor feature development project.' },
        { title: 'Week 2: First Pull Request', description: 'Completed my first feature, a basic login page. Submitted my code for review and got valuable feedback from my mentor.' }
    ];

    // --- Rendering Functions ---

    // Home Page rendering
    function renderHomePage() {
        const programsGrid = document.getElementById('programsGrid');
        const coursesGrid = document.getElementById('coursesGrid');
        const companyLogoCarousel = document.getElementById('companyLogoCarousel');
        const mentorsGrid = document.getElementById('mentorsGrid');
        
        if (programsGrid && coursesGrid && companyLogoCarousel) {
            programsData.forEach(program => {
                const card = document.createElement('div');
                card.className = 'program-card card';
                card.innerHTML = `
                    <div class="program-icon"><i class="${program.icon}"></i></div>
                    <h3>${program.title}</h3>
                    <p>${program.description}</p>
                `;
                programsGrid.appendChild(card);
            });

            coursesData.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <img src="${course.img}" alt="${course.title}">
                    <div class="course-info">
                        <h4>${course.title}</h4>
                        <p>${course.description}</p>
                        <div class="course-tags">
                            ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
                        </div>
                        <div class="course-buttons">
                            <a href="#" class="enroll-button">Enroll Now</a>
                            <a href="#" class="brochure-button">View Brochure</a>
                        </div>
                    </div>
                `;
                coursesGrid.appendChild(card);
            });
            
            logosForCarousel.forEach(logoName => {
                const img = document.createElement('img');
                img.src = `assets/img/company-logos/${logoName}.png`;
                img.alt = `${logoName} logo`;
                img.className = 'company-logo';
                companyLogoCarousel.appendChild(img);
            });

            if (mentorsGrid) {
                mentorsForCarousel.forEach(mentor => {
                    const card = document.createElement('div');
                    card.className = 'mentor-card card';
                    card.innerHTML = `
                        <img src="${mentor.img}" alt="${mentor.name}" class="mentor-img">
                        <h4>${mentor.name}</h4>
                        <p class="mentor-field">${mentor.field}</p>
                        <p class="mentor-experience"><strong>Experience:</strong> ${mentor.experience} Years</p>
                        <p class="mentor-company"><strong>Company:</strong> ${mentor.company}</p>
                    `;
                    mentorsGrid.appendChild(card);
                });
            }
        }
    }

    // Internships Page rendering
    function renderInternshipsPage() {
        const listingsContainer = document.getElementById('internshipListings');
        const searchInput = document.getElementById('searchInput');
        const locationFilter = document.getElementById('locationFilter');
        const industryFilter = document.getElementById('industryFilter');

        function filterAndRender() {
            const searchTerm = (searchInput ? searchInput.value.toLowerCase() : '');
            const selectedLocation = (locationFilter ? locationFilter.value : '');
            const selectedIndustry = (industryFilter ? industryFilter.value : '');
            
            const filtered = internships.filter(internship => {
                const matchesSearch = internship.title.toLowerCase().includes(searchTerm) || internship.company.toLowerCase().includes(searchTerm);
                const matchesLocation = selectedLocation === '' || internship.location === selectedLocation;
                const matchesIndustry = selectedIndustry === '' || internship.industry === selectedIndustry;
                return matchesSearch && matchesLocation && matchesIndustry;
            });
            
            if (!listingsContainer) return;
            listingsContainer.innerHTML = '';
            if (filtered.length === 0) {
                listingsContainer.innerHTML = '<p class="no-results">No internships found matching your criteria. Try adjusting your filters.</p>';
                return;
            }
            
            filtered.forEach(internship => {
                const card = document.createElement('div');
                card.className = 'internship-card';
                card.innerHTML = `
                    <h3 class="card-title">${internship.title}</h3>
                    <p class="company-name">${internship.company}</p>
                    <div class="card-details">
                        <p><i class="fas fa-map-marker-alt"></i> ${internship.location}</p>
                        <p><i class="fas fa-clock"></i> ${internship.duration}</p>
                        <p><i class="fas fa-money-bill-wave"></i> ${internship.stipend}</p>
                    </div>
                    <div class="card-skills">
                        ${internship.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                `;
                listingsContainer.appendChild(card);
            });
        }
        
        if (listingsContainer) {
            if (searchInput) { searchInput.addEventListener('input', filterAndRender); }
            if (locationFilter) { locationFilter.addEventListener('change', filterAndRender); }
            if (industryFilter) { industryFilter.addEventListener('change', filterAndRender); }
            filterAndRender(); // Initial render
        }
    }

    // Dashboard Page rendering
    function renderDashboardPage() {
        const dashboardStatus = document.getElementById('dashboardStatus');
        const applicationList = document.getElementById('applicationList');
        const logbookEntriesContainer = document.getElementById('logbookEntries');
        
        if (dashboardStatus && applicationList) {
            const statusCounts = applications.reduce((acc, app) => {
                acc[app.status] = (acc[app.status] || 0) + 1;
                return acc;
            }, {});
            
            document.getElementById('appliedCount').textContent = statusCounts['applied'] || 0;
            document.getElementById('reviewCount').textContent = statusCounts['review'] || 0;
            document.getElementById('offerCount').textContent = statusCounts['offer'] || 0;
            
            applications.forEach(app => {
                const listItem = document.createElement('li');
                listItem.className = 'application-status-item';
                const statusClass = `status-${app.status}`;
                const statusText = app.status.charAt(0).toUpperCase() + app.status.slice(1);
                listItem.innerHTML = `
                    <div class="app-details">
                        <h4>${app.title}</h4>
                        <p>at ${app.company}</p>
                    </div>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                `;
                applicationList.appendChild(listItem);
            });

            logbookEntries.forEach(entry => {
                    const entryItem = document.createElement('div');
                    entryItem.className = 'logbook-item';
                    entryItem.innerHTML = `
                        <h4>${entry.title}</h4>
                        <p>${entry.description}</p>
                    `;
                    if (logbookEntriesContainer) {
                        logbookEntriesContainer.appendChild(entryItem);
                    }
                });
            }
        }
    
    // Profile Page rendering
    function renderProfilePage() {
        const profileHeader = document.getElementById('profileHeader');
        const studentInfo = document.getElementById('studentInfo');
        const academicInfo = document.getElementById('academicInfo');
        const skillsSection = document.getElementById('skillsSection');
        
        if (profileHeader && studentInfo && academicInfo && skillsSection) {
            document.getElementById('profileName').textContent = studentData.name;
            document.getElementById('profileCollege').textContent = studentData.college;
            
            studentInfo.innerHTML = `
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <span class="info-label">Email:</span>
                        <span class="info-value">${studentData.email}</span>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <span class="info-label">Phone:</span>
                        <span class="info-value">${studentData.phone}</span>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <span class="info-label">Location:</span>
                        <span class="info-value">${studentData.location}</span>
                    </div>
                </div>
            `;
            academicInfo.innerHTML = `
                <div class="info-item">
                    <i class="fas fa-graduation-cap"></i>
                    <div>
                        <span class="info-label">Department:</span>
                        <span class="info-value">${studentData.department}</span>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-calendar-alt"></i>
                    <div>
                        <span class="info-label">Batch:</span>
                        <span class="info-value">${studentData.batch}</span>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-chart-line"></i>
                    <div>
                        <span class="info-label">CGPA:</span>
                        <span class="info-value">${studentData.cgpa}</span>
                    </div>
                </div>
            `;
            
            skillsSection.innerHTML = `
                <h3 class="section-title">Skills</h3>
                <div class="card-skills">
                    ${studentData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `;
        }
    }

    // Call the correct rendering function based on the current page
    const pageName = window.location.pathname.split('/').pop();
    if (pageName === 'index.html' || pageName === '') {
        renderHomePage();
    } else if (pageName === 'internships.html') {
        renderInternshipsPage();
    } else if (pageName === 'dashboard.html') {
        renderDashboardPage();
    } else if (pageName === 'profile.html') {
        renderProfilePage();
    }
});