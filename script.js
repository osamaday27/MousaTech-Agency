/* =====================================================
   MOUSATECH AGENCY
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   DOM
===================================================== */

const body = document.body;

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

const projectsGrid =
    document.getElementById("projectsGrid");

const eventsTrack =
    document.getElementById("eventsTrack");

const modal =
    document.getElementById("projectModal");

const modalContent =
    document.getElementById("projectModalContent");


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        const icon =
            menuBtn.querySelector("i");

        if (!icon) return;

        if (nav.classList.contains("open")) {

            icon.className =
                "bi bi-x-lg";

        } else {

            icon.className =
                "bi bi-list";

        }

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            const icon =
                menuBtn.querySelector("i");

            if (icon) {

                icon.className =
                    "bi bi-list";

            }

        });

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav a"
    );


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 180;

    let currentSection = "home";

    sections.forEach(section => {

        if (
            scrollPosition >=
            section.offsetTop
        ) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === `#${currentSection}`
        );

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {

    "create-portfolio-blog-website": {

        title:
            "Create Portfolio",

        category:
            "موقع تعريفي",

        description:
            "تجربة رقمية احترافية لعرض الهوية والخدمات والأعمال بطريقة واضحة تساعد على بناء حضور رقمي قوي."

    },


    "snefro-factory-ecommerce": {

        title:
            "Snefro Factory E-Commerce",

        category:
            "متجر إلكتروني",

        description:
            "منصة تجارة إلكترونية قابلة للتوسع لإدارة المنتجات والطلبات والعملاء وتجربة الشراء."

    },


    "factory-his": {

        title:
            "Factory Operations Management",

        category:
            "نظام إدارة",

        description:
            "نظام مخصص لتنظيم بيانات المؤسسة ومتابعة العمليات وسير العمل من مكان واحد."

    },


    "hospital-system": {

        title:
            "Hospital Management System",

        category:
            "نظام صحي",

        description:
            "منصة متكاملة لإدارة العمليات والبيانات الإدارية ومسارات العمل داخل المؤسسة الصحية."

    },


    "appnabra-education-platform": {

        title:
            "Digital Education Platform",

        category:
            "منصة تعليمية",

        description:
            "منظومة تعليم رقمي لإدارة الدورات والمتعلمين والمحتوى والعمليات التعليمية."

    },


    "neo-gym-system": {

        title:
            "Fitness Club Management",

        category:
            "نظام إدارة",

        description:
            "نظام لإدارة الاشتراكات والعملاء والحضور والخدمات والعمليات اليومية للنوادي الرياضية."

    },


    "neo-pos-system": {

        title:
            "Retail POS System",

        category:
            "نقاط بيع",

        description:
            "نظام لإدارة المبيعات والمنتجات والفواتير والتقارير والحركة اليومية."

    },


    "nile-noir-hotel": {

        title:
            "Luxury Hospitality Experience",

        category:
            "ضيافة وفنادق",

        description:
            "تجربة رقمية راقية لعرض الفندق والخدمات وتسهيل وصول الضيوف للمعلومات."

    },


    "pro-pre-idea-crm": {

        title:
            "Enterprise CRM",

        category:
            "CRM",

        description:
            "بيئة مركزية لإدارة بيانات العملاء والفرص والمهام ومتابعة سير العمل التجاري."

    },


    "snefro-clothing-store": {

        title:
            "Snefro Clothing Store",

        category:
            "متجر إلكتروني",

        description:
            "تجربة تسوق حديثة ومتجاوبة لعرض المنتجات والتصنيفات وتسهيل رحلة العميل."

    },


    "tawqit-education-redesign": {

        title:
            "Educational Platform Redesign",

        category:
            "منصة تعليمية",

        description:
            "إعادة تصميم استراتيجية لتحسين التنقل وتنظيم المحتوى وتقديم تجربة تعليمية أكثر احترافية."

    },


    "theqa": {

        title:
            "Theqa Digital Services",

        category:
            "منصة خدمات",

        description:
            "منصة رقمية منظمة تربط المستخدمين بالخدمات من خلال رحلة واضحة وسهلة الاستخدام."

    },


    "theqa-services-website": {

        title:
            "Theqa Corporate Website",

        category:
            "موقع خدمات",

        description:
            "موقع احترافي يوضح الخدمات والقيمة المقدمة ويساعد على تحويل الزائر إلى عميل."

    },


    "viver-website": {

        title:
            "Viver Web Experience",

        category:
            "موقع ويب",

        description:
            "موقع حديث ومتجاوب بهوية مرنة لعرض المحتوى والخدمات بصورة احترافية."

    },


    "social": {

        title:
            "Social Engagement Platform",

        category:
            "منصة رقمية",

        description:
            "منتج اجتماعي قابل للتوسع يركز على اكتشاف المحتوى والتفاعل وسهولة الاستخدام."

    }

};


/* =====================================================
   PROJECT ORDER
===================================================== */

const projectOrder = [

    "snefro-clothing-store",

    "create-portfolio-blog-website",

    "snefro-factory-ecommerce",

    "factory-his",

    "appnabra-education-platform",

    "hospital-system",

    "neo-pos-system",

    "neo-gym-system",

    "pro-pre-idea-crm",

    "theqa",

    "theqa-services-website",

    "tawqit-education-redesign",

    "nile-noir-hotel"

];


/* =====================================================
   RENDER PROJECTS
===================================================== */

function renderProjects() {

    if (!projectsGrid) {
        return;
    }


    projectsGrid.innerHTML =
        projectOrder
            .map((slug, index) => {

                const project =
                    projects[slug];

                if (!project) {
                    return "";
                }


                return `

                    <article
                        class="project-card reveal visible"
                        data-project="${slug}"
                        tabindex="0"
                        role="button"
                        aria-label="عرض مشروع ${project.title}"
                    >

                        <div class="project-cover">

                            <img
                                src="assets/projects/${slug}/cover.PNG"
                                alt="${project.title}"
                                loading="lazy"
                                onerror="this.style.display='none'"
                            >

                            <span class="project-index">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                        </div>


                        <div class="project-content">

                            <span class="project-category">
                                ${project.category}
                            </span>

                            <h3>
                                ${project.title}
                            </h3>

                            <p>
                                ${project.description}
                            </p>

                            <span class="project-link">

                                عرض المشروع

                                <i class="bi bi-arrow-left"></i>

                            </span>

                        </div>

                    </article>

                `;

            })
            .join("");

}


renderProjects();


/* =====================================================
   EVENTS
===================================================== */

function renderEvents() {

    if (!eventsTrack) {
        return;
    }


    const events =
        Array.from(
            {
                length: 6
            },
            (_, index) => index + 1
        );


    eventsTrack.innerHTML =
        events
            .map(number => {

                return `

                    <article class="event-card">

                        <img
                            src="assets/events/${number}.png"
                            alt="دورة تدريبية من MousaTech"
                            loading="lazy"
                            onerror="
                                this.closest('.event-card').style.display='none'
                            "
                        >

                        <div class="event-card-content">

                            <strong>
                                دورات في صناعة وتطوير
                                تطبيقات الويب والموبايل
                            </strong>

                            <small>
                                MousaTech Agency
                            </small>

                        </div>

                    </article>

                `;

            })
            .join("");

}


renderEvents();


/* =====================================================
   PROJECT MODAL
===================================================== */

function openProject(slug) {

    const project =
        projects[slug];

    if (
        !project ||
        !modal ||
        !modalContent
    ) {
        return;
    }


    const screenshots =
        Array.from(
            {
                length: 8
            },
            (_, index) => {

                const imageNumber =
                    index + 1;


                return `

                    <div class="project-shot">

                        <div class="project-shot-fallback">

                            <i class="bi bi-image"></i>

                        </div>

                        <img
                            src="assets/projects/${slug}/${imageNumber}.PNG"
                            alt="${project.title} - Screenshot ${imageNumber}"
                            loading="lazy"
                            onerror="
                                this.style.display='none'
                            "
                        >

                    </div>

                `;

            }
        )
        .join("");


    modalContent.innerHTML = `

        <div class="project-modal-head">

            <span>
                ${project.category}
            </span>

            <h2>
                ${project.title}
            </h2>

            <p>
                ${project.description}
            </p>

        </div>

        <div class="project-gallery">

            ${screenshots}

        </div>

    `;


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    body.classList.add(
        "modal-open"
    );

}


function closeProject() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   MODAL EVENTS
===================================================== */

document.addEventListener(
    "click",
    event => {

        const projectCard =
            event.target.closest(
                "[data-project]"
            );


        if (projectCard) {

            openProject(
                projectCard.dataset.project
            );

            return;
        }


        if (
            event.target.closest(
                "[data-close-modal]"
            )
        ) {

            closeProject();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProject();

        }


        const activeProject =
            document.activeElement;


        if (
            (
                event.key === "Enter" ||
                event.key === " "
            ) &&
            activeProject?.dataset?.project
        ) {

            event.preventDefault();

            openProject(
                activeProject.dataset.project
            );

        }

    }
);


/* =====================================================
   HEADER SHADOW
===================================================== */

const header =
    document.getElementById("header");


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 15) {

        header.style.boxShadow =
            "0 10px 30px rgba(7,26,61,.05)";

    } else {

        header.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


/* =====================================================
   INITIALIZATION
===================================================== */

updateHeader();

updateActiveNavigation();