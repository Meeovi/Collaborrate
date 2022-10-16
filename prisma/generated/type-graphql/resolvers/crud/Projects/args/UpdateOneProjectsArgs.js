"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsUpdateInput_1 = require("../../../inputs/ProjectsUpdateInput");
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let UpdateOneProjectsArgs = class UpdateOneProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateInput_1.ProjectsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateInput_1.ProjectsUpdateInput)
], UpdateOneProjectsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], UpdateOneProjectsArgs.prototype, "where", void 0);
UpdateOneProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProjectsArgs);
exports.UpdateOneProjectsArgs = UpdateOneProjectsArgs;
