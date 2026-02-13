---
layout: page
title: Projects
permalink: /projects/
full_width: true
---

<!-- HEADER -->
<section class="py-5 text-center">
    <div class="container pt-5">
        <span class="badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 rounded-pill mb-3 px-3 py-2">INNOVATION HUB</span>
        <h1 class="display-3 fw-bold mb-3">Built by <span class="text-brand">Students</span></h1>
        <p class="text-muted mx-auto mb-5" style="max-width: 600px;">
            From simple automation scripts to complex campus management systems. Explore open-source innovations crafted by GKCIET minds.
        </p>

        <!-- Navigation Tabs -->
        <div class="d-flex justify-content-center mb-5">
            <div class="nav-segment-container">
                <a href="/projects/" class="btn btn-brand btn-sm rounded-pill px-4 text-black fw-bold text-decoration-none nav-segment-item active">All Projects</a>
                <a href="/projects/web/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Web Dev</a>
                <a href="/projects/ai/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">AI / ML</a>
                <a href="/projects/app/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">App Dev</a>
            </div>
        </div>
    </div>
</section>

<!-- PROJECTS GRID -->
<section class="py-5">
    <div class="container">
        
        <div class="row g-4">
            {% for project in site.data.projects.list %}
            <div class="col-md-6 col-lg-4 fade-in-up stagger-{{ forloop.index | modulo: 5 | plus: 1 }}">
                <div class="glass-card p-4 h-100 d-flex flex-column rounded-4 group">
                    <div class="d-flex justify-content-between align-items-start mb-4">
                         <div class="icon-square bg-white bg-opacity-10 text-white rounded-circle p-3">
                            <i class="{{ project.icons[0] }} fa-lg"></i>
                        </div>
                        <span class="badge bg-black border border-secondary text-muted">{{ project.category }}</span>
                    </div>
                    
                    <h4 class="fw-bold text-white mb-2">{{ project.title }}</h4>
                    <p class="text-muted small mb-4 line-clamp-3">{{ project.description }}</p>
                    
                    <div class="mt-auto pt-3 border-top border-secondary border-opacity-10">
                        <div class="d-flex justify-content-between align-items-center">
                             <div class="d-flex gap-2 text-muted">
                                {% for icon in project.icons %}
                                <i class="{{ icon }}" title="{{ icon }}"></i>
                                {% endfor %}
                            </div>
                            <a href="{{ project.link }}" class="btn btn-sm btn-outline-light rounded-pill px-3">View <i class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>


