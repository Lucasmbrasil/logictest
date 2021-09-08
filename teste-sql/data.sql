-- QUESTÃO 1
SELECT "ALUNO".nome 
FROM "ALUNO"
    JOIN "ALUNO_TURMA"
    ON "ALUNO".id = "ALUNO_TURMA"."aluno_id"
    JOIN "TURMA"
    ON "ALUNO_TURMA"."turma_id" = "TURMA".id
    JOIN "PROFESSOR"
    ON "TURMA"."professor_id" = "PROFESSOR".id
WHERE "PROFESSOR".nome = 'João Pedro'

-- QUESTÃO 2
SELECT "TURMA"."dia_da_semana"
FROM "TURMA"
    JOIN "DISCIPLINA"
    ON "TURNA"."DISCIPLINA_id" = "DISCIPLINA".id
WHERE "DISCIPLINA".nome = 'matematica'

-- QUESTÃO 3
SELECT "ALUNO".*
FROM "ALUNO"
    JOIN "ALUNO_TURMA"
    ON "ALUNO".id = "ALUNO_TURMA"."aluno_id"
    JOIN "TURMA"
    ON "ALUNO_TURMA"."turma_id" = "TURMA".id
    JOIN "DISCIPLINA"
    ON "TURMA"."DISCIPLINA_id" = "DISCIPLINA".id
WHERE "DISCIPLINA".nome = 'matematica' OR "DISCIPLINA".nome = 'fisica'

-- QUESTÃO 4
SELECT *
FROM "DISCIPLINA"
WHERE NOT EXISTS 
    (SELECT * FROM "TURMA" WHERE "DISCIPLINA".id = "TURMA"."DISCIPLINA_id")

-- QUESTÃO 5

SELECT *
FROM "ALUNO"
    JOIN "ALUNO_TURMA"
    ON "ALUNO".id = "ALUNO_TURMA"."aluno_id"
    JOIN "TURMA"
    ON "ALUNO_TURMA"."turma_id" = "TURMA".id
    JOIN "DISCIPLINA"
    ON "TURMA"."DISCIPLINA_id" = "DISCIPLINA".id
WHERE "DISCIPLINA".nome = 'matematica' AND "DISCIPLINA".nome <> 'quimica'