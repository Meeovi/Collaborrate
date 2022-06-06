"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesUpdateInput_1 = require("../../../inputs/Project_templatesUpdateInput");
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let UpdateProject_templatesArgs = class UpdateProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesUpdateInput_1.Project_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesUpdateInput_1.Project_templatesUpdateInput)
], UpdateProject_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], UpdateProject_templatesArgs.prototype, "where", void 0);
UpdateProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateProject_templatesArgs);
exports.UpdateProject_templatesArgs = UpdateProject_templatesArgs;
