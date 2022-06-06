"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateManyInput_1 = require("../../../inputs/ProjectsCreateManyInput");
let CreateManyProjectsArgs = class CreateManyProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsCreateManyInput_1.ProjectsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProjectsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProjectsArgs.prototype, "skipDuplicates", void 0);
CreateManyProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProjectsArgs);
exports.CreateManyProjectsArgs = CreateManyProjectsArgs;
