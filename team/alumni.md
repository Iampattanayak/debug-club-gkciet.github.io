---
layout: page
title: Alumni
permalink: /team/alumni/
full_width: true
---

<!-- HEADER -->
<section class="py-5 text-center bg-black position-relative overflow-hidden">
    <div class="container pt-5">
        <span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 rounded-pill mb-3">HALL OF FAME</span>
        <h1 class="display-3 fw-bold mb-3">Our <span class="text-brand">Alumni</span></h1>
        <p class="text-muted mx-auto mb-5" style="max-width: 600px;">
            Honoring the past members who laid the foundation for DEBUG Club.
        </p>

        <!-- Navigation Tabs -->
        <div class="d-flex justify-content-center">
            <div class="nav-segment-container">
                <a href="/team/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">All Members</a>
                <a href="/team/core/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Core Team</a>
                <a href="/team/contributors/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Contributors</a>
                <a href="/team/alumni/" class="btn btn-brand btn-sm rounded-pill px-4 text-black fw-bold text-decoration-none nav-segment-item active">Alumni</a>
            </div>
        </div>
    </div>
</section>

<!-- ALUMNI LIST -->
<section class="py-5">
    <div class="container">
        <div class="row g-4 justify-content-center">
            {% for member in site.data.team.alumni %}
            <div class="col-lg-6">
                <div class="card-clone p-4 bg-dark border-secondary border-opacity-10 d-flex align-items-center hover-lift transition-base">
                    <img src="{{ member.image }}" class="rounded-circle me-4 border border-warning border-opacity-25 p-1" width="80" height="80" style="object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name={{ member.name | url_encode }}&background=111&color=fff'">
                    <div class="flex-grow-1">
                        <div class="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 class="fw-bold text-white mb-1">{{ member.name }}</h5>
                                <p class="text-muted small mb-0">{{ member.role }}</p>
                            </div>
                            {% if member.linkedin %}
                            <a href="{{ member.linkedin }}" target="_blank" class="text-muted hover-brand"><i class="fab fa-linkedin fa-lg"></i></a>
                            {% endif %}
                        </div>
                        {% if member.current_company %}
                        <div class="mt-2 text-warning small">
                            <i class="fas fa-briefcase me-1"></i> Now at <strong>{{ member.current_company }}</strong>
                        </div>
                        {% endif %}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>
