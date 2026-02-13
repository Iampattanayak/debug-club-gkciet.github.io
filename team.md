---
layout: page
title: Team
permalink: /team/
full_width: true
---

<!-- HEADER -->
<section class="py-5 text-center bg-black position-relative overflow-hidden">
    <div class="container pt-5">
        <span class="badge bg-brand bg-opacity-10 text-brand border border-brand border-opacity-25 rounded-pill mb-3">CELEBRATING EXCELLENCE</span>
        <h1 class="display-3 fw-bold mb-3">The Architects of <span class="text-brand">Innovation</span></h1>
        <p class="text-muted mx-auto mb-5" style="max-width: 600px;">
            Meet the brilliant minds driving the DEBUG community forward. From core developers to visionary leaders.
        </p>

        <!-- Navigation Tabs -->
        <div class="d-flex justify-content-center">
            <div class="nav-segment-container">
                <a href="/team/" class="btn btn-brand btn-sm rounded-pill px-4 text-black fw-bold text-decoration-none nav-segment-item active">All Members</a>
                <a href="/team/core/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Core Team</a>
                <a href="/team/contributors/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Contributors</a>
                <a href="/team/alumni/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Alumni</a>
            </div>
        </div>
    </div>
</section>

<!-- ALL MEMBERS DISPLAY -->
<section class="py-5">
    <div class="container">
        <!-- Section: Leadership -->
        <div class="mb-5">
            <h5 class="text-white fw-bold mb-4">Leadership</h5>
            <div class="row g-3">
                {% for member in site.data.team.leadership %}
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-dark border border-secondary border-opacity-10 rounded hover-bg-dark transition-base">
                        <img src="{{ member.image }}" class="rounded-circle me-3" width="50" height="50" style="object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name={{ member.name | url_encode }}&background=111&color=fff'">
                        <div>
                            <h6 class="fw-bold text-white mb-0 small">{{ member.name }}</h6>
                            <small class="text-brand fw-bold" style="font-size: 0.7rem;">{{ member.role }}</small>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>

        <!-- Section: Core Team -->
        <div class="mb-5">
             <h4 class="fw-bold text-white mb-4 border-start border-4 border-secondary ps-3">Core Team</h4>
             <div class="row g-3">
                {% for member in site.data.team.core_members %}
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-dark border border-secondary border-opacity-10 rounded hover-bg-dark transition-base">
                        <img src="{{ member.image }}" class="rounded-circle me-3" width="50" height="50" style="object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name={{ member.name | url_encode }}&background=333&color=fff'">
                        <div>
                            <h6 class="fw-bold text-white mb-0 small">{{ member.name }}</h6>
                            <small class="text-muted" style="font-size: 0.7rem;">{{ member.role }}</small>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>

         <!-- Section: Contributors -->
        <div class="mb-5">
             <h4 class="fw-bold text-white mb-4 border-start border-4 border-info ps-3">Contributors</h4>
             <div class="row g-3">
                {% for member in site.data.team.contributors %}
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-dark border border-secondary border-opacity-10 rounded hover-bg-dark transition-base">
                        <img src="{{ member.image }}" class="rounded-circle me-3" width="50" height="50" style="object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name={{ member.name | url_encode }}&background=333&color=fff'">
                        <div>
                            <h6 class="fw-bold text-white mb-0 small">{{ member.name }}</h6>
                            <small class="text-info" style="font-size: 0.7rem;">{{ member.role }}</small>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>
