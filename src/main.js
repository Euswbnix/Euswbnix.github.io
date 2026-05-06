const profile = {
  name: 'Alex H.',
  tagline: 'Applied Statistics & Mathematics at the University of Toronto. Researching at the intersection of NLP and deep learning.',
  school: 'UofT',
  schoolTrack: 'Applied Statistics Specialist',
  focus: 'Natural Language Processing',
  mindset: 'Curiosity-driven learning',
};

const aboutPoints = [
  'Applied statistics student with a strong engineering orientation.',
  'Focus areas: machine translation, prompting strategies, and robust evaluation.',
  'I care about shipping clear demos, clean code, and reproducible experiments.',
];

const quickFacts = [
  'Location: Toronto, ON',
  'Status: Open to internships / research collaboration',
  'Interests: NLP systems, LLM evaluation, model UX',
];

const education = [
  { year: '2022 - 2026', title: 'HBSc in Applied Statistics', place: 'University of Toronto', desc: 'Probability, statistical learning, optimization, and computational methods.' },
  { year: '2023 - 2025', title: 'Mathematics & CS Electives', place: 'UofT', desc: 'Algorithms, linear algebra, numerical methods, and software engineering foundations.' },
  { year: '2024 - now', title: 'NLP Research Focus', place: 'Deep Learning + LLM Systems', desc: 'Transformer-based methods, prompt design, and automatic evaluation pipelines.' },
];

const projects = [
  {
    id: 'P-01',
    title: 'Neural MT Workbench',
    desc: 'Transformer based machine translation experiments with reproducible training and evaluation pipelines.',
    stack: ['Python', 'PyTorch', 'Transformers', 'WandB'],
    shape: 'torus',
    link: '#',
  },
  {
    id: 'P-02',
    title: 'Portfolio Intelligence',
    desc: 'Interactive research portfolio with lightweight analytics and high-clarity storytelling patterns.',
    stack: ['React', 'Vue', 'Three.js', 'CSS'],
    shape: 'icosa',
    link: '#',
  },
  {
    id: 'P-03',
    title: 'Data Cleaning Toolkit',
    desc: 'A modular toolkit for dataset auditing, quality checks, and annotation consistency diagnostics.',
    stack: ['Pandas', 'NumPy', 'FastAPI', 'SQLite'],
    shape: 'knot',
    link: '#',
  },
  {
    id: 'P-04',
    title: 'Prompt Lab',
    desc: 'Prompt experiments with traceable evaluations for reasoning, translation, and style transfer tasks.',
    stack: ['OpenAI API', 'Node.js', 'Vite', 'Postgres'],
    shape: 'octa',
    link: '#',
  },
];

const skillGroups = [
  { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R'] },
  { name: 'ML / NLP', items: ['PyTorch', 'Transformers', 'spaCy', 'SentencePiece'] },
  { name: 'Frontend', items: ['React', 'Vue', 'Three.js', 'Tailwind CSS'] },
  { name: 'Backend', items: ['FastAPI', 'Node.js', 'Express', 'REST API'] },
  { name: 'Data', items: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'] },
  { name: 'Infra', items: ['GitHub Actions', 'Docker', 'Linux', 'Cloud'] },
];

const lifeNotes = [
  'Distance running keeps my thinking sharp and my routines disciplined.',
  'I enjoy writing technical notes that turn messy experiments into reusable playbooks.',
  'Reading long-form books on statistics, philosophy, and design helps me connect ideas across fields.',
];

const interests = [
  'Long-distance running',
  'Analog photography',
  'Desk setup / hardware ergonomics',
  'Minimalist interface design',
  'Coffee brewing',
  'Open-source learning',
];

const contactLinks = [
  { label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { label: 'GitHub', value: 'github.com/alexh', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/alexh', href: 'https://linkedin.com' },
  { label: 'Resume', value: 'Available on request', href: 'mailto:alex@example.com?subject=Resume%20Request' },
];

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'section',
      { id: 'home', className: 'hero' },
      React.createElement(
        'div',
        { className: 'hero-left' },
        React.createElement('div', { className: 'hero-note' }, 'Portfolio — 2026'),
        React.createElement(
          'h1',
          { className: 'hero-title' },
          'Alex ',
          React.createElement('em', null, 'H.')
        ),
        React.createElement('p', { className: 'hero-copy' }, profile.tagline),
        React.createElement(
          'div',
          { className: 'hero-cta' },
          React.createElement('a', { className: 'btn main', href: '#projects' }, 'View Projects'),
          React.createElement('a', { className: 'btn', href: '#contact' }, 'Get In Touch')
        )
      ),
      React.createElement(
        'div',
        { className: 'hero-right' },
        React.createElement('div', { className: 'hero-orb', id: 'hero-orb' }),
        React.createElement(
          'div',
          { className: 'hero-meta' },
          React.createElement('div', { className: 'big' }, profile.school),
          React.createElement('div', { className: 'small' }, profile.schoolTrack)
        ),
        React.createElement(
          'div',
          { className: 'hero-meta' },
          React.createElement('div', { className: 'big' }, profile.focus),
          React.createElement('div', { className: 'small' }, 'Primary Research Focus')
        ),
        React.createElement(
          'div',
          { className: 'hero-meta' },
          React.createElement('div', { className: 'big' }, '∞'),
          React.createElement('div', { className: 'small' }, profile.mindset)
        )
      )
    ),

    React.createElement(
      'section',
      { id: 'about' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('span', { className: 'section-index' }, '01'),
        React.createElement('h2', { className: 'section-title' }, 'About')
      ),
      React.createElement(
        'div',
        { className: 'two-col' },
        React.createElement(
          'div',
          { className: 'about-card' },
          aboutPoints.map((line) => React.createElement('p', { key: line }, line))
        ),
        React.createElement(
          'div',
          { className: 'panel' },
          quickFacts.map((fact) =>
            React.createElement(
              'div',
              { className: 'edu-item', key: fact },
              React.createElement('div', { className: 'edu-main' }, fact)
            )
          )
        )
      )
    ),

    React.createElement(
      'section',
      { id: 'education' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('span', { className: 'section-index' }, '02'),
        React.createElement('h2', { className: 'section-title' }, 'Education')
      ),
      React.createElement(
        'div',
        { className: 'panel' },
        education.map((item) =>
          React.createElement(
            'div',
            { className: 'edu-item', key: item.year + item.title },
            React.createElement('div', { className: 'edu-year' }, item.year),
            React.createElement('div', { className: 'edu-main' }, item.title + ' — ' + item.place),
            React.createElement('div', { className: 'project-desc' }, item.desc)
          )
        )
      )
    ),

    React.createElement(
      'section',
      { id: 'skills' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('span', { className: 'section-index' }, '03'),
        React.createElement('h2', { className: 'section-title' }, 'Skills')
      ),
      React.createElement('div', { id: 'vue-skills' })
    ),

    React.createElement(
      'section',
      { id: 'projects' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('span', { className: 'section-index' }, '04'),
        React.createElement('h2', { className: 'section-title' }, 'Projects')
      ),
      React.createElement(
        'div',
        { className: 'projects-grid' },
        projects.map((p, idx) =>
          React.createElement(
            'article',
            { className: 'project-card', key: p.id },
            React.createElement('div', {
              className: 'project-3d',
              'data-shape': p.shape,
              'data-seed': String(idx + 1),
              'aria-hidden': 'true',
            }),
            React.createElement('div', { className: 'project-id' }, p.id),
            React.createElement('h3', { className: 'project-title' }, p.title),
            React.createElement('p', { className: 'project-desc' }, p.desc),
            React.createElement(
              'div',
              { className: 'stack' },
              p.stack.map((s) => React.createElement('span', { key: s }, s))
            ),
            React.createElement(
              'a',
              {
                className: 'contact-list-link',
                href: p.link,
                onClick: (e) => {
                  if (p.link === '#') e.preventDefault();
                },
              },
              'View Case Study'
            )
          )
        )
      )
    ),

    React.createElement(
      'section',
      { id: 'life' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('span', { className: 'section-index' }, '05'),
        React.createElement('h2', { className: 'section-title' }, 'Life')
      ),
      React.createElement(
        'div',
        { className: 'two-col' },
        React.createElement(
          'div',
          { className: 'panel' },
          lifeNotes.map((n) => React.createElement('p', { key: n }, n))
        ),
        React.createElement(
          'div',
          { className: 'panel' },
          interests.map((i) =>
            React.createElement(
              'div',
              { key: i, className: 'edu-item' },
              React.createElement('div', { className: 'edu-main' }, i)
            )
          )
        )
      )
    ),

    React.createElement(
      'section',
      { id: 'contact' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('span', { className: 'section-index' }, '06'),
        React.createElement('h2', { className: 'section-title' }, 'Contact')
      ),
      React.createElement(
        'div',
        { className: 'contact-list' },
        contactLinks.map((c) =>
          React.createElement(
            'a',
            { key: c.label, href: c.href, target: '_blank', rel: 'noreferrer' },
            `${c.label} — ${c.value}`
          )
        )
      )
    ),

    React.createElement('footer', null, 'A.H. Portfolio 2026')
  );
}

function mountSkillsVue() {
  const target = document.getElementById('vue-skills');
  if (!target) return;

  Vue.createApp({
    data() {
      return { groups: skillGroups };
    },
    computed: {
      chips() {
        return this.groups.flatMap((group) =>
          group.items.map((item) => ({ key: `${group.name}-${item}`, short: item.slice(0, 3).toUpperCase(), item }))
        );
      },
    },
    mounted() {
      initSkillSpheres();
    },
    template: `
      <div>
        <div class="skills-spheres">
          <div v-for="(chip, idx) in chips" :key="chip.key" class="skill-sphere-item">
            <div class="skill-sphere-canvas" :data-skill="chip.short" :data-seed="String(idx + 1)" aria-hidden="true"></div>
            <div class="skill-sphere-name">{{ chip.item }}</div>
          </div>
        </div>
        <div class="skills-grid">
          <div v-for="group in groups" :key="group.name" class="skill-group">
            <div class="group-name">{{ group.name }}</div>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  }).mount('#vue-skills');
}

function initBackgroundNetwork() {
  const canvas = document.getElementById('fx-bg');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const points = [];
  let w = 0;
  let h = 0;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * Math.min(window.devicePixelRatio, 2));
    canvas.height = Math.floor(h * Math.min(window.devicePixelRatio, 2));
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(canvas.width / w, 0, 0, canvas.height / h, 0, 0);

    points.length = 0;
    const count = Math.min(150, Math.floor((w * h) / 16000));
    for (let i = 0; i < count; i += 1) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < points.length; i += 1) {
      const p = points[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.fillStyle = 'rgba(96, 221, 200, 0.7)';
      ctx.fillRect(p.x, p.y, 1.7, 1.7);

      for (let j = i + 1; j < points.length; j += 1) {
        const q = points[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.strokeStyle = `rgba(74, 186, 173, ${0.11 - d / 1200})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}

function initHeroOrb() {
  const host = document.getElementById('hero-orb');
  if (!host) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(44, host.clientWidth / host.clientHeight, 0.1, 100);
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(host.clientWidth, host.clientHeight);
  host.appendChild(renderer.domElement);

  const geom = new THREE.IcosahedronGeometry(1.3, 2);
  const wire = new THREE.MeshBasicMaterial({ color: 0x59ddc7, wireframe: true, transparent: true, opacity: 0.92 });
  const solid = new THREE.MeshPhongMaterial({ color: 0x08332f, transparent: true, opacity: 0.76, shininess: 50 });

  const meshSolid = new THREE.Mesh(geom, solid);
  const meshWire = new THREE.Mesh(geom, wire);
  scene.add(meshSolid);
  scene.add(meshWire);

  const pointsGeo = new THREE.BufferGeometry();
  const n = 320;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i += 1) arr[i] = (Math.random() - 0.5) * 7;
  pointsGeo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  const stars = new THREE.Points(pointsGeo, new THREE.PointsMaterial({ color: 0x6cb8ff, size: 0.02 }));
  scene.add(stars);

  scene.add(new THREE.AmbientLight(0x336877, 1.1));
  const light = new THREE.PointLight(0x61ecd5, 1.2, 40);
  light.position.set(2, 2, 3);
  scene.add(light);

  let targetX = 0;
  let targetY = 0;
  host.addEventListener('pointermove', (e) => {
    const rect = host.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.6;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.2;
  });

  function tick() {
    requestAnimationFrame(tick);
    const t = performance.now() * 0.001;
    meshSolid.rotation.y += 0.003;
    meshWire.rotation.y += 0.0038;
    meshSolid.rotation.x += 0.0017;
    meshWire.rotation.x += 0.0021;
    stars.rotation.y = t * 0.08;

    meshSolid.rotation.y += (targetX - meshSolid.rotation.y) * 0.03;
    meshWire.rotation.x += (targetY - meshWire.rotation.x) * 0.03;

    renderer.render(scene, camera);
  }

  function onResize() {
    const width = host.clientWidth;
    const height = host.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('resize', onResize);
  tick();
}

function initSkillSpheres() {
  const hosts = document.querySelectorAll('.skill-sphere-canvas');
  hosts.forEach((host, index) => {
    const w = host.clientWidth || 90;
    const h = host.clientHeight || 90;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.z = 2.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    host.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(0.72, 1);
    const solid = new THREE.MeshPhongMaterial({ color: 0x0d3340, emissive: 0x0b1f2f, shininess: 52, transparent: true, opacity: 0.86 });
    const wire = new THREE.MeshBasicMaterial({ color: 0x67e4cb, wireframe: true, transparent: true, opacity: 0.94 });
    const core = new THREE.Mesh(geo, solid);
    const shell = new THREE.Mesh(geo, wire);
    scene.add(core);
    scene.add(shell);

    scene.add(new THREE.AmbientLight(0x2f6770, 1.0));
    const p = new THREE.PointLight(0x7ffff0, 1.3, 20);
    p.position.set(1.4, 1.2, 2.4);
    scene.add(p);

    const seed = Number(host.dataset.seed || index + 1);

    function animate() {
      requestAnimationFrame(animate);
      const t = performance.now() * 0.001 + seed * 0.4;
      core.rotation.y = t * 0.6;
      core.rotation.x = Math.sin(t * 0.4) * 0.22;
      shell.rotation.y = t * 0.8;
      shell.rotation.z = t * 0.45;
      renderer.render(scene, camera);
    }

    animate();

    host.addEventListener('pointermove', (e) => {
      const rect = host.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      core.rotation.x += y * 0.03;
      shell.rotation.y += x * 0.05;
    });

    window.addEventListener('resize', () => {
      const nw = host.clientWidth || 90;
      const nh = host.clientHeight || 90;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    });
  });
}

function buildProjectGeometry(shape) {
  if (shape === 'torus') return new THREE.TorusKnotGeometry(0.5, 0.16, 80, 12);
  if (shape === 'knot') return new THREE.TorusKnotGeometry(0.48, 0.14, 120, 18, 2, 3);
  if (shape === 'octa') return new THREE.OctahedronGeometry(0.62, 1);
  return new THREE.IcosahedronGeometry(0.62, 1);
}

function initProjectCardScenes() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card) => {
    const host = card.querySelector('.project-3d');
    if (!host) return;
    const shape = host.dataset.shape || 'icosa';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const geometry = buildProjectGeometry(shape);
    const mat = new THREE.MeshPhongMaterial({ color: 0x0f3a45, emissive: 0x0a212c, shininess: 68, flatShading: true });
    const wire = new THREE.MeshBasicMaterial({ color: 0x62dbc6, wireframe: true, transparent: true, opacity: 0.82 });

    const mesh = new THREE.Mesh(geometry, mat);
    const overlay = new THREE.Mesh(geometry, wire);
    scene.add(mesh);
    scene.add(overlay);

    scene.add(new THREE.AmbientLight(0x2b5f6f, 1.1));
    const light = new THREE.PointLight(0x78ffe6, 1.3, 18);
    light.position.set(1.6, 1.4, 2.2);
    scene.add(light);

    let tx = 0;
    let ty = 0;

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tx = x;
      ty = y;
      card.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      tx = 0;
      ty = 0;
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });

    function tick() {
      requestAnimationFrame(tick);
      const t = performance.now() * 0.001;
      mesh.rotation.y = t * 0.7 + tx * 1.1;
      mesh.rotation.x = t * 0.25 - ty * 0.9;
      overlay.rotation.y = t * 0.9 + tx * 1.4;
      overlay.rotation.x = t * 0.35 - ty * 1.1;
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    tick();
  });
}

function bootstrapPage() {
  ReactDOM.createRoot(document.getElementById('react-root')).render(React.createElement(App));

  requestAnimationFrame(() => {
    mountSkillsVue();
    initBackgroundNetwork();
    initHeroOrb();
    initProjectCardScenes();
  });
}

bootstrapPage();
