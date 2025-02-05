import styles from "../styles/ExamTabs.module.css";
import PostPone from "../components/postpone";

export default function ExamTabs({ activeTab }) {
  const exams = [
    {
      status: "Exam Conducted",
      subjectCode: "4110343181",
      subject: "Introduction to Functional English",
      examDate: "01-01-2025",
      totalStudents: 58,
      presentStudents: 52,
      absentStudents: 2,
      marked: false,
    },
    {
      status: "Exam not Conducted",
      subjectCode: "4110343181",
      subject: "Introduction to Functional English",
      examDate: "01-01-2025",
      totalStudents: 60,
      presentStudents: 55,
      absentStudents: 5,
      marked: false,
    },
    {
      status: "Exam Conducted",
      subjectCode: "4110343181",
      subject: "Introduction to Functional English",
      examDate: "01-01-2025",
      totalStudents: 62,
      presentStudents: 57,
      absentStudents: 5,
      marked: true,
    },
  ];
  return (
    <div className={styles.examContainer}>
      {activeTab === "Overview" && <h1>Welcome to the Overview Section</h1>}
      {activeTab === "Manage User" && <h1>Manage Users Here</h1>}
      {activeTab === "Academic" && <h1>Academic Information</h1>}
      {activeTab === "Time Table" && <h1>View Your Time Table</h1>}
      {activeTab === "Attendance" && <h1>Attendance Records</h1>}
      {activeTab === "Help Desk" && <h1>Need Help? Contact Us!</h1>}
      {activeTab === "Task" && <h1>Manage Your Tasks</h1>}
      {activeTab === "Placement" && <h1>Placement Opportunities</h1>}
      {activeTab === "Directory" && <h1>Directory of Contacts</h1>}
      {activeTab === "Exam" && (
        <div className={styles.examTab}>
          <div className={styles.header}>
            <h2 className={styles.Exam}>Exam</h2>
            {/* <p className={styles.dasbord}></p> */}
            <div className={styles.actions}>
              <button className={styles.createExam}>+ Create Exam</button>
              <button className={styles.examHistory}>Exam History</button>
            </div>
          </div>
          <div className={styles.div}></div>
          <div className={styles.examInfo}>
            <div className={styles.universityDetails}>
              <img
                src="https://picsum.photos/200/100"
                alt="University Logo"
                className={styles.logo}
              />

              <div className={styles.detailsBox}>
                <h3>Bhagwan Mahavir University</h3>
                <p>Mid Term CIA 2 Exam April - 2024</p>
                <p>Semester 1 | Batch 2022-25</p>
              </div>
              <div className={styles.midLine}></div>
              <div className={styles.detailsBox}>
                <h3>Bachelore of Vocation</h3>
                <p>Practical Accounting , Taxation & Tally</p>
              </div>
            </div>
            <div className="w-[38%]">
              <PostPone />
            </div>
          </div>

          <div className={styles.navbar}>
            <button className={styles.navButton}>Exam Panel</button>
            <button className={styles.navButton}>Timetable</button>
            <button className={styles.navButton}>Eligibility Checker</button>
            <button className={styles.navButton}>Hall Ticket</button>
            <button className={styles.navButton}>Supervisors</button>
            <button className={styles.navButton}>Paper Print</button>
            <button className={styles.navButton}>Signature Sheet</button>
            <button className={styles.navButton}>Paper Check</button>
            <button className={styles.navButton}>Mark Entry</button>
          </div>

          <div className={styles.card}>
            {/* Header */}
            <div className={styles.Cardheader}>Exam Conducted</div>

            {/* Subject Details */}
            <div className={styles.subjectDetails}>
              <p className={styles.subjectCode}>
                Subject Code: <strong>4110343181</strong>
              </p>
              <h2 className={styles.subjectTitle}>
                Introduction to Functional English
              </h2>
              <p className={styles.examDate}>
                📅 Exam Date: <span className={styles.date}>01-01-2025</span>
              </p>
            </div>

            {/* Attendance Section */}
            <div className={styles.attendanceSection}>
              <div className={styles.attendanceHeader}>
                <p className={styles.attendanceTitle}>Student Attendance</p>
                <span className={styles.draft}>Draft</span>
              </div>
              <div className={styles.attendanceStats}>
                <div className={styles.Box}>
                  <p className={styles.statLabel}>Total Students</p>
                  <p className={styles.totalStudents}>58</p>
                </div>
                <div className={styles.Box}>
                  <p className={styles.statLabel}>Present Students</p>
                  <p className={styles.presentStudents}>52</p>
                </div>
                <div className={styles.Box}>
                  <p className={styles.statLabel}>Absent Students</p>
                  <p className={styles.absentStudents}>02</p>
                </div>
              </div>
            </div>

            {/* Mark Attendance Button */}
            <div className={styles.markAttendance}>
              <p className={styles.remainingStudents}>
                4 Students remain for mark attendance
              </p>
              <button className={styles.attendanceButton}>
                Mark / Edit Student's Attendance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
