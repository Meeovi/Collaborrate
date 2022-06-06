"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesCreateInput_1 = require("../../../inputs/Project_templatesCreateInput");
let CreateProject_templatesArgs = class CreateProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesCreateInput_1.Project_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesCreateInput_1.Project_templatesCreateInput)
], CreateProject_templatesArgs.prototype, "data", void 0);
CreateProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProject_templatesArgs);
exports.CreateProject_templatesArgs = CreateProject_templatesArgs;
