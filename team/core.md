---
layout: page
title: Core Team
permalink: /team/core/
full_width: true
---

<!-- HEADER -->
<section class="py-5 text-center bg-black position-relative overflow-hidden">
    <div class="container pt-5">
        <span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 rounded-pill mb-3">THE ENGINE ROOM</span>
        <h1 class="display-3 fw-bold mb-3">Core <span class="text-brand">Team</span></h1>
        <p class="text-muted mx-auto mb-5" style="max-width: 600px;">
            The dedicated individuals driving operations, development, and growth.
        </p>

        <!-- Navigation Tabs -->
        <div class="d-flex justify-content-center">
            <div class="nav-segment-container">
                <a href="/team/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">All Members</a>
                <a href="/team/core/" class="btn btn-brand btn-sm rounded-pill px-4 text-black fw-bold text-decoration-none nav-segment-item active">Core Team</a>
                <a href="/team/contributors/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Contributors</a>
                <a href="/team/alumni/" class="btn btn-transparent btn-sm rounded-pill px-4 text-muted hover-white text-decoration-none nav-segment-item">Alumni</a>
            </div>
        </div>
    </div>
</section>

<!-- LEADERSHIP -->
<section class="py-5">
    <div class="container">
        <h5 class="text-white fw-bold mb-4">Leadership</h5>
        
        <div class="row g-4 justify-content-center mb-5">
            {% for leader in site.data.team.leadership %}
            <div class="col-lg-4">
                <div class="card-clone p-0 overflow-hidden h-100 border border-secondary border-opacity-25 bg-dark position-relative hover-lift transition-base">
                    <div class="p-5 text-center">
                        <div class="mb-4 d-inline-block position-relative">
                            <img src="{{ leader.image }}" class="rounded-circle border border-2 border-brand p-1" width="120" height="120" style="object-fit:cover;" alt="{{ leader.name }}" onerror="this.src='https://ui-avatars.com/api/?name={{ leader.name | url_encode }}&background=111&color=fff'">
                        </div>
                        <h3 class="h4 fw-bold text-white mb-1">{{ leader.name }}</h3>
                        <p class="text-brand small fw-bold mb-3 text-uppercase">{{ leader.role }}</p>
                        
                         <div class="d-flex justify-content-center gap-2 mt-4">
                             {% if leader.github %}
                             <a href="{{ leader.github }}" target="_blank" class="btn btn-dark btn-sm rounded-circle bg-black border-secondary" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;"><i class="fab fa-github"></i></a>
                             {% endif %}
                             {% if leader.linkedin %}
                             <a href="{{ leader.linkedin }}" target="_blank" class="btn btn-dark btn-sm rounded-circle bg-black border-secondary" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;"><i class="fab fa-linkedin"></i></a>
                             {% endif %}
                             {% if leader.website %}
                             <a href="{{ leader.website }}" target="_blank" class="btn btn-dark btn-sm rounded-circle bg-black border-secondary" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-globe"></i></a>
                             {% endif %}
                             {% if leader.email %}
                             <a href="{{ leader.email }}" class="btn btn-dark btn-sm rounded-circle bg-black border-secondary" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-envelope"></i></a>
                             {% endif %}
                             {% if leader.twitter %}
                             <a href="{{ leader.twitter }}" target="_blank" class="btn btn-dark btn-sm rounded-circle bg-black border-secondary" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;"><i class="fab fa-x-twitter"></i></a>
                             {% endif %}
                             {% if leader.instagram %}
                             <a href="{{ leader.instagram }}" target="_blank" class="btn btn-dark btn-sm rounded-circle bg-black border-secondary" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;"><i class="fab fa-instagram"></i></a>
                             {% endif %}
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- CORE GRID -->
<section class="py-5 bg-black">
    <div class="container">
        <h5 class="text-white fw-bold mb-4">Active Core Members</h5>
        <div class="row g-4">
            {% for member in site.data.team.core_members %}
            <div class="col-lg-3 col-md-6">
                <div class="card-clone p-4 bg-dark border-secondary border-opacity-10 h-100 hover-border-brand transition-base">
                    <div class="d-flex align-items-center mb-3">
                         <img src="{{ member.image }}" class="rounded-circle me-3" width="48" height="48" style="object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name={{ member.name | url_encode }}&background=333&color=fff'">
                         <div>
                             <h6 class="fw-bold text-white mb-0">{{ member.name }}</h6>
                             <small class="text-muted" style="font-size: 0.75rem;">{{ member.role }}</small>
                         </div>
                    </div>
                    {% if member.tags %}
                    <div class="d-flex gap-2 mb-4 flex-wrap">
                        {% for tag in member.tags %}
                        <span class="badge bg-black border border-secondary text-muted" style="font-size: 0.65rem;">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}
                    
                    <div class="d-flex justify-content-between align-items-center border-top border-secondary border-opacity-25 pt-3 mt-auto">
                        <div class="d-flex gap-2">
                             {% if member.github %}
                             <a href="{{ member.github }}" target="_blank" rel="noopener noreferrer" class="text-muted hover-white"><i class="fab fa-github"></i></a>
                             {% endif %}
                             {% if member.linkedin %}
                             <a href="{{ member.linkedin }}" target="_blank" rel="noopener noreferrer" class="text-muted hover-white"><i class="fab fa-linkedin"></i></a>
                             {% endif %}
                             {% if member.website %}
                             <a href="{{ member.website }}" target="_blank" rel="noopener noreferrer" class="text-muted hover-white"><i class="fas fa-globe"></i></a>
                             {% endif %}
                             {% if member.email %}
                             <a href="{{ member.email }}" class="text-muted hover-white"><i class="fas fa-envelope"></i></a>
                             {% endif %}
                             {% if member.twitter %}
                             <a href="{{ member.twitter }}" target="_blank" rel="noopener noreferrer" class="text-muted hover-white"><i class="fab fa-x-twitter"></i></a>
                             {% endif %}
                             {% if member.instagram %}
                             <a href="{{ member.instagram }}" target="_blank" rel="noopener noreferrer" class="text-muted hover-white"><i class="fab fa-instagram"></i></a>
                             {% endif %}
                        </div>
                    </div>

                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>
