"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let DeleteProjectsArgs = class DeleteProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], DeleteProjectsArgs.prototype, "where", void 0);
DeleteProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProjectsArgs);
exports.DeleteProjectsArgs = DeleteProjectsArgs;
