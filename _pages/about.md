---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- PhD -->
I am a third-year PhD student in the [MAP-Group](https://cslinzhang.github.io/home/) at [Tongji University](https://en.tongji.edu.cn/p/#/), under the supervision of Prof. [Lin Zhang](https://scholar.google.com/citations?user=8VOk_S4AAAAJ&hl=en) and Prof. [Ying Shen](https://scholar.google.com/citations?user=A0N_mS0AAAAJ&hl=en). I obtained my bachelor’s degree from Tongji University in 2023, after which I began my doctoral studies.

<!-- research interest -->
My research interests lie in the field of Embodied AI, focusing on enabling robots to perceive and interact with the physical world through advanced learning representations. Specifically, my work explores: Multimodal Representation for Robotics, Vision-Language Fields, and Generalist Robot Models.

My goal is to leverage multimodal perception and large-scale models to enhance the generalization and manipulation capabilities of robots in complex, real-world environments.


# 🔥 News
<div id="news-container">
<ul>
<li><em>2026.02</em>: &nbsp;🎉 Our paper on vision language grounding and grasping got accepted in CVPR 2026.</li>
</ul>
<!-- <span id="news-toggle" onclick="toggleNews()">Show more</span> -->
</div>

<style>
#news-container ul li:nth-child(n+7) {
  display: none;
}
#news-container.expanded ul li:nth-child(n+7) {
  display: list-item;
}
#news-toggle {
  color: #224b8d;
  cursor: pointer;
}
#news-toggle:hover {
  text-decoration: underline;
}
.abstract-toggle, .bibtex-toggle {
  color: #224b8d;
  cursor: pointer;
}
.abstract-toggle:hover, .bibtex-toggle:hover {
  text-decoration: underline;
}
.abstract-content, .bibtex-content {
  display: none;
  position: absolute;
  z-index: 100;
  margin-top: 5px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-left: 3px solid #224b8d;
  font-size: 0.9em;
  max-width: 600px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
}
.bibtex-content {
  font-family: monospace;
  white-space: pre-wrap;
}
.abstract-content.show, .bibtex-content.show {
  display: block;
}
.paper-box-text {
  position: relative;
}
.paper-box-text a {
  text-decoration: none;
}
.paper-box-text a:hover {
  text-decoration: underline;
}
</style>

<script>
function toggleNews() {
  var container = document.getElementById('news-container');
  var toggle = document.getElementById('news-toggle');
  if (container.classList.contains('expanded')) {
    container.classList.remove('expanded');
    toggle.textContent = 'Show more';
  } else {
    container.classList.add('expanded');
    toggle.textContent = 'Show less';
  }
}

function toggleAbstract(element) {
  var content = element.parentElement.querySelector('.abstract-content');
  if (content) {
    content.classList.toggle('show');
  }
}

function toggleBibtex(element) {
  var content = element.parentElement.querySelector('.bibtex-content');
  if (content) {
    content.classList.toggle('show');
  }
}
</script>

# 📝 Publications 

<!-- pub with images -->



<!-- 1 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2024</div><img src='images/mm2024_gs3lam.png' alt="sym" width="500" height="300"></div></div>
<div class='paper-box-text' markdown="1">

[**GS3LAM: Gaussian Semantic Splatting SLAM**](https://dl.acm.org/doi/abs/10.1145/3664647.3680739)

**Linfei Li**, Lin Zhang, Zhong Wang, Ying Shen

[[webpage]](https://github.com/lif314/GS3LAM)
[[code]](https://github.com/lif314/GS3LAM)
[[pdf]](https://dl.acm.org/doi/abs/10.1145/3664647.3680739)
<span class="abstract-toggle" onclick="toggleAbstract(this)">[abstract]</span>
<span class="bibtex-toggle" onclick="toggleBibtex(this)">[bibtex]</span>
<span class="abstract-content">Recently, the multi-modal fusion of RGB, depth, and semantics has shown great potential in the domain of dense Simultaneous Localization and Mapping (SLAM), as known as dense semantic SLAM. Yet a prerequisite for generating consistent and continuous semantic maps is the availability of dense, efficient, and scalable scene representations. To date, existing semantic SLAM systems based on explicit scene representations (points/meshes/surfels) are limited by their resolutions and inabilities to predict unknown areas, thus failing to generate dense maps. Contrarily, a few implicit scene representations (Neural Radiance Fields) to deal with these problems rely on time-consuming ray tracing-based volume rendering technique, which cannot meet the real-time rendering requirements of SLAM. Fortunately, the Gaussian Splatting scene representation has recently emerged, which inherits the efficiency and scalability of point/surfel representations while smoothly represents geometric structures in a continuous manner, showing promise in addressing the aforementioned challenges. To this end, we propose GS3LAM, a Gaussian Semantic Splatting SLAM framework, which takes multimodal data as input and can render consistent, continuous dense semantic maps in real-time. To fuse multimodal data, GS3LAM models the scene as a Semantic Gaussian Field (SG-Field), and jointly optimizes camera poses and the field by establishing error constraints between observed and predicted data. Furthermore, a Depth-adaptive Scale Regularization (DSR) scheme is proposed to tackle the problem of misalignment between scale-invariant Gaussians and geometric surfaces within the SG-Field. To mitigate the forgetting phenomenon, we propose an effective Random Sampling-based Keyframe Mapping (RSKM) strategy, which exhibits notable superiority over local covisibility optimization strategies commonly utilized in 3DGS-based SLAM systems. Extensive experiments conducted on the benchmark datasets reveal that compared with state-of-the-art competitors, GS3 LAM demonstrates increased tracking robustness, superior real-time rendering quality, and enhanced semantic reconstruction precision. To make the results reproducible, the source code is available at https://github.com/lif314/GS3LAM.</span>
<span class="bibtex-content">@inproceedings{li2024gs3lam,<br>  title={GS3LAM: Gaussian Semantic Splatting SLAM},<br>  author={Li, Linfei and Zhang, Lin and Wang, Zhong and Shen, Ying},<br>  booktitle={Proceedings of the 32nd ACM International Conference on Multimedia},<br>  pages={3019--3027},<br>  year={2024},<br>  numpages={9}<br>}</span>

</div>
</div>
<!-- pub short -->
<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->



# 📖 Educations
- *2023.09 - 2029.03 (expected)*, PhD, Computer Science and Technology, Tongji University.
- *2019.09 - 2023.07*, Undergraduate, Software Engineering, Tongji University.

<!-- # 🎖 Honors and Awards
- *2024.10*, Deutschestipendium 2024/2025 -->

# 📚 Academic Services
- Reviewer: CVPR 2026, ICML 2025,  AAAI 2025/2026, MM 2025.
<!-- 
# 💻 Internships
- *2023.07 - 2024.05*, [Agile Robots](https://www.agile-robots.com/en/), Munich.

# 🤝 Volunteer Works
- *2024.06 - 2024.07*, [UEFA Euro 2024](https://www.uefa.com/euro2024/), Munich.
 -->
