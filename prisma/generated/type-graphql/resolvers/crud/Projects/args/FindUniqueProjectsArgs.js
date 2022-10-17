"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let FindUniqueProjectsArgs = class FindUniqueProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], FindUniqueProjectsArgs.prototype, "where", void 0);
FindUniqueProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProjectsArgs);
exports.FindUniqueProjectsArgs = FindUniqueProjectsArgs;
