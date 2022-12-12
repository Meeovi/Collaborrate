"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsUpdateManyMutationInput_1 = require("../../../inputs/ProjectsUpdateManyMutationInput");
const ProjectsWhereInput_1 = require("../../../inputs/ProjectsWhereInput");
let UpdateManyProjectsArgs = class UpdateManyProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateManyMutationInput_1.ProjectsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateManyMutationInput_1.ProjectsUpdateManyMutationInput)
], UpdateManyProjectsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], UpdateManyProjectsArgs.prototype, "where", void 0);
UpdateManyProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProjectsArgs);
exports.UpdateManyProjectsArgs = UpdateManyProjectsArgs;
