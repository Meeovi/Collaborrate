"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesUpdateManyMutationInput_1 = require("../../../inputs/TemplatesUpdateManyMutationInput");
const TemplatesWhereInput_1 = require("../../../inputs/TemplatesWhereInput");
let UpdateManyTemplatesArgs = class UpdateManyTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesUpdateManyMutationInput_1.TemplatesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesUpdateManyMutationInput_1.TemplatesUpdateManyMutationInput)
], UpdateManyTemplatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereInput_1.TemplatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesWhereInput_1.TemplatesWhereInput)
], UpdateManyTemplatesArgs.prototype, "where", void 0);
UpdateManyTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTemplatesArgs);
exports.UpdateManyTemplatesArgs = UpdateManyTemplatesArgs;
