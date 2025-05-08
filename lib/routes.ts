type RouteAccessProps = {
  [key: string]: string[]
}


export const routeAccess: RouteAccessProps = {
  '/admin(.*)': ['admin'],
  '/patient(.*)': ['admin', 'patient', 'doctor'],
  "/doctor(.*)": ["doctor"],
  "/staff(.*)": ["nurse", "lab_technician", "cashier"],
  "/record/users": ["admin"],
  "/record/doctors": ["admin"],
  "/record/doctors(.*)": ["admin", "doctor"],
  "/record/staffs": ["admin", "doctor"],
  "/record/patients": ["admin", "doctor", "nurse"],
  "/patient/registrations": ["patient"],
}