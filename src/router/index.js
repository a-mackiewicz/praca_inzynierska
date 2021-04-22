import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.prototype.$appName = 0
const routes = [
  {
    path: '/login',
    name: 'login',
    components: {
      panel: () => import('../components/Login'),
    }
  },
  {
    path: '/logout',
    name: 'logout',
    components: {
      panel: () => import('../components/Logout'),
    }
  },
  {
    path: '/view_change',
    name: 'view_change',
    components: {
      panel: () => import('../components/ViewChange'),
    }
  },
  {
    path: '/',
    name: '',
    components: {
      panel: () => import('../components/LoginPatient'),
    }
  },
  {
    path: '/login_patient',
    name: 'login_patient',
    components: {
      panel: () => import('../components/LoginPatient'),
    }
  },
  {
    path: '/patient_panel',
    name: 'patient_panel',
    components: {
      panel: () => import('../components/PatientPanel')
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Examination'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/settings',
    name: 'settings',
    components: {
      panel: () => import('../components/Settings')
    }
  },
  {
    path: '/list_patients',
    name: 'list_patients',
    components: {
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    components: {
      panel: () => import('../components/Calendar')
    }
  },
  {
    path: '/add_patient',
    name: 'add_patient',
    components: {
    default: () => import('../components/AddPatient')
    }
  },
  {
    path: '/patient/:id',
    name: 'patient',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Patient'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/exam/:id',
    name: 'exam',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Examination'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/interview/:id',
    name: 'interview',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Interview'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/visits/:id',
    name: 'visits',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Visits'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/referral/:id',
    name: 'referral',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Referral'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/message/:id',
    name: 'message',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Message'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/pictures/:id',
    name: 'pictures',
    components: {
      toolbar: () => import('../components/toolbar_patient'),
      default: () => import('../components/Pictures'),
      panel: () => import('../components/ListPatients')
    }
  },
  {
    path: '/picture/:id',
    name: 'picture',
    components: {
      default: () => import('../components/Picture'),
    }
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router