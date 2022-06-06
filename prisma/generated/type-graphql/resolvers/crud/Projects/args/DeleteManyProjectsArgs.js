"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereInput_1 = require("../../../inputs/ProjectsWhereInput");
let DeleteManyProjectsArgs = class DeleteManyProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], DeleteManyProjectsArgs.prototype, "where", void 0);
DeleteManyProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProjectsArgs);
exports.DeleteManyProjectsArgs = DeleteManyProjectsArgs;
