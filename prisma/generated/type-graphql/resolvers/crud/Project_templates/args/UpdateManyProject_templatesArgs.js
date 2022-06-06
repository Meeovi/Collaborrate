"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesUpdateManyMutationInput_1 = require("../../../inputs/Project_templatesUpdateManyMutationInput");
const Project_templatesWhereInput_1 = require("../../../inputs/Project_templatesWhereInput");
let UpdateManyProject_templatesArgs = class UpdateManyProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesUpdateManyMutationInput_1.Project_templatesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesUpdateManyMutationInput_1.Project_templatesUpdateManyMutationInput)
], UpdateManyProject_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereInput_1.Project_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereInput_1.Project_templatesWhereInput)
], UpdateManyProject_templatesArgs.prototype, "where", void 0);
UpdateManyProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProject_templatesArgs);
exports.UpdateManyProject_templatesArgs = UpdateManyProject_templatesArgs;
