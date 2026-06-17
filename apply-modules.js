const O = {
  title: '<title>Hospital Management | DoQuill — Industry Vertical System</title>',
  icon: 'doquill-hospital-management.svg',
  cat: 'id="detail-category">Healthcare & Medical</span>',
  price: 'id="detail-price">$19/mo</span>',
  h1: 'id="detail-title" style="line-height:1.05">Hospital Management</h1>',
  sub: 'id="detail-subtitle">Complete operational system for hospitals — managing doctors, beds, lab results, pharmacy and patient billing from one unified platform.</p>',
  desc: 'id="detail-description" style="line-height:1.8">Hospital Management gives your team a complete operational command centre. From patient admissions and bed allocation to lab result tracking, pharmacy dispensing and invoice generation — every workflow is connected and automated. Built for African and emerging market healthcare environments where efficiency and accuracy are non-negotiable.</p>',
  fName: ['Patient admissions','Bed management','Lab management','Pharmacy','Billing & invoicing','Reports & analytics'],
  fDesc: ['Register and manage patients with full medical history tracking','Real-time bed availability and ward allocation across departments','Test orders, results tracking and patient report generation','Medicine dispensing, stock tracking and prescription management','Automated patient billing with insurance claim support','Occupancy rates, revenue and operational performance reports'],
  pAbbr: ['CMO','CFO','OPS'],
  pTitle: ['Chief Medical Officer','Finance Director','Operations Manager'],
  pDesc: ['Oversee clinical operations and patient outcome tracking','Track revenue, billing accuracy and departmental costs','Manage beds, staff rotas and daily hospital workflows'],
  relHead: '<h2 class="h5 fw-bold m-0 dark:text-white">Related verticals</h2>',
  rHref: ['industry-medical-lab.html','industry-pharmacy.html','industry-elderly-care.html'],
  rIcon: ['doquill-medical-lab.svg','doquill-pharmacy-management.svg','doquill-elderly-care.svg'],
  rName: ['Medical Lab','Pharmacy','Elderly Care'],
  rDesc: ['Lab tests & results','Medicine management','Long-term care management'],
  ctaH: '>Ready to activate Hospital Management?</h2>',
  ctaS: 'style="color:#B0B7CC">Included in your DoQuill plan. Activate instantly from your workspace at $19/mo.</p>'
};

function rep(s, a, b) {
  if (s.indexOf(a) === -1) throw new Error('anchor not found: ' + a.slice(0, 60));
  return s.replace(a, b);
}
function repAll(s, a, b) {
  if (s.indexOf(a) === -1) throw new Error('anchor not found(all): ' + a);
  return s.split(a).join(b);
}

function apply(content, d) {
  const wi = content.indexOf('<!-- Wrapper start -->');
  let head = content.slice(0, wi);
  let w = content.slice(wi);

  head = rep(head, O.title, '<title>' + d.title + ' | DoQuill</title>');

  w = repAll(w, O.icon, d.icon);
  w = rep(w, O.cat, 'id="detail-category">' + d.cat + '</span>');
  w = rep(w, O.price, 'id="detail-price">' + d.price + '</span>');
  w = rep(w, O.h1, 'id="detail-title" style="line-height:1.05">' + d.h1 + '</h1>');
  w = rep(w, O.sub, 'id="detail-subtitle">' + d.sub + '</p>');
  w = rep(w, O.desc, 'id="detail-description" style="line-height:1.8">' + d.desc + '</p>');

  for (let i = 0; i < 3; i++) {
    w = rep(w, '>' + O.pAbbr[i] + '</div>', '>@@PA' + i + '@@</div>');
    w = rep(w, 'mb-1">' + O.pTitle[i] + '</div>', 'mb-1">@@PT' + i + '@@</div>');
    w = rep(w, '<div class="fs-8 text-muted">' + O.pDesc[i] + '</div>', '<div class="fs-8 text-muted">' + d.per[i][2] + '</div>');
  }

  for (let i = 0; i < 6; i++) {
    w = rep(w, '<div class="fw-medium fs-7 dark:text-white">' + O.fName[i] + '</div>', '<div class="fw-medium fs-7 dark:text-white">' + d.feat[i][0] + '</div>');
    w = rep(w, '<div class="fs-8 text-muted">' + O.fDesc[i] + '</div>', '<div class="fs-8 text-muted">' + d.feat[i][1] + '</div>');
  }

  w = rep(w, O.relHead, '<h2 class="h5 fw-bold m-0 dark:text-white">' + d.relHead + '</h2>');
  for (let i = 0; i < 3; i++) {
    w = rep(w, 'href="' + O.rHref[i] + '"', 'href="' + d.rel[i][0] + '"');
    w = rep(w, O.rIcon[i], d.rel[i][1]);
    w = rep(w, '<div class="fw-medium fs-7 dark:text-white">' + O.rName[i] + '</div>', '<div class="fw-medium fs-7 dark:text-white">' + d.rel[i][2] + '</div>');
    w = rep(w, '<div class="fs-8 text-muted">' + O.rDesc[i] + '</div>', '<div class="fs-8 text-muted">' + d.rel[i][3] + '</div>');
  }

  w = rep(w, O.ctaH, '>' + d.ctaH + '</h2>');
  w = rep(w, O.ctaS, 'style="color:#B0B7CC">' + d.ctaS + '</p>');

  for (let i = 0; i < 3; i++) {
    w = w.split('@@PA' + i + '@@').join(d.per[i][0]);
    w = w.split('@@PT' + i + '@@').join(d.per[i][1]);
  }

  return head + w;
}

module.exports = { apply };
