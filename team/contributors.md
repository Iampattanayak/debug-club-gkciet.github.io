---
layout: page
title: Contributors
permalink: /team/contributors/
full_width: true
---

<!-- HEADER -->
<section class="py-5 text-center bg-black position-relative overflow-hidden">
    <div class="container pt-5">
        <span class="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 rounded-pill mb-3">OPEN SOURCE HEROES</span>
        <h1 class="display-3 fw-bold mb-3">Our <span class="text-brand">Contributors</span></h1>
        <p class="text-muted mx-auto mb-5" style="max-width: 600px;">
            The amazing people who help build our projects, organize events, and grow the community.
        </p>

        <!-- Navigation Tabs -->
        <div class="d-flex justify-content-center">
            <div class="nav-segment-container">
                <a href="/team/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">All Members</a>
                <a href="/team/core/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Core Team</a>
                <a href="/team/contributors/" class="btn btn-brand btn-sm rounded-pill px-4 text-black fw-bold text-decoration-none nav-segment-item active">Contributors</a>
                <a href="/team/alumni/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Alumni</a>
            </div>
        </div>
    </div>
</section>

<!-- CONTRIBUTORS GRID -->
<section class="py-5">
    <div class="container">
        <div class="row g-4">
            {% for member in site.data.team.contributors %}
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-clone p-4 bg-dark border-secondary border-opacity-10 h-100 hover-border-info transition-base text-center">
                    <img src="{{ member.image }}" class="rounded-circle mb-3 border border-secondary p-1" width="80" height="80" style="object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name={{ member.name | url_encode }}&background=333&color=fff'">
                    <h5 class="fw-bold text-white mb-1">{{ member.name }}</h5>
                    <p class="text-info small fw-bold mb-3">{{ member.role }}</p>
                    
                    {% if member.tags %}
                    <div class="d-flex gap-1 justify-content-center flex-wrap">
                        {% for tag in member.tags %}
                        <span class="badge bg-black border border-secondary text-muted" style="font-size: 0.6rem;">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
            </div>
            {% endfor %}
            
            <!-- Call to Action Card -->
            <div class="col-lg-3 col-md-4 col-sm-6">
                <a href="https://github.com/debug-club-gkciet" target="_blank" class="card-clone border-dashed border-secondary bg-transparent d-flex flex-column align-items-center justify-content-center text-center p-4 h-100 opacity-50 hover-opacity-100 text-decoration-none">
                    <div class="rounded-circle bg-dark p-3 mb-3 text-muted display-4 lh-1">
                        <i class="fas fa-plus fa-sm"></i>
                    </div>
                    <h6 class="fw-bold text-white">Become a Contributor</h6>
                    <p class="text-muted small mb-0">Join us on GitHub</p>
                </a>
            </div>
        </div>
    </div>
</section>
