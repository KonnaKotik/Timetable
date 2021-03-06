package ru.itis.timetable.form;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateForm {

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String patronymic;

    private String group;
}
