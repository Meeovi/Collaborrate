"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let DeleteOneProjectsArgs = class DeleteOneProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], DeleteOneProjectsArgs.prototype, "where", void 0);
DeleteOneProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneProjectsArgs);
exports.DeleteOneProjectsArgs = DeleteOneProjectsArgs;
