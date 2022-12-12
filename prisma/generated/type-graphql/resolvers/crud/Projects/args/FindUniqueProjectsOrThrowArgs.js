"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let FindUniqueProjectsOrThrowArgs = class FindUniqueProjectsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], FindUniqueProjectsOrThrowArgs.prototype, "where", void 0);
FindUniqueProjectsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProjectsOrThrowArgs);
exports.FindUniqueProjectsOrThrowArgs = FindUniqueProjectsOrThrowArgs;
