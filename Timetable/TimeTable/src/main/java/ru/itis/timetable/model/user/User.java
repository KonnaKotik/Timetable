package ru.itis.timetable.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.timetable.model.ElectiveCourse;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "timetable_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String patronymic;

    private String telegramCode;

    @Column(name = "user_group")
    private String group;

    @Enumerated(value = EnumType.STRING)
    private UserState userState;

    @Enumerated(value = EnumType.STRING)
    private UserRole userRole;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_course", joinColumns = @JoinColumn(name = "user_id"))
    private List<ElectiveCourse> courses;






}
