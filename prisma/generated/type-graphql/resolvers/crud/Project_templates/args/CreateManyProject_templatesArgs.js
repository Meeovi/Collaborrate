"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesCreateManyInput_1 = require("../../../inputs/Project_templatesCreateManyInput");
let CreateManyProject_templatesArgs = class CreateManyProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesCreateManyInput_1.Project_templatesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProject_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProject_templatesArgs.prototype, "skipDuplicates", void 0);
CreateManyProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProject_templatesArgs);
exports.CreateManyProject_templatesArgs = CreateManyProject_templatesArgs;
