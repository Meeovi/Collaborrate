"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesUpdateManyMutationInput_1 = require("../../../inputs/AttributesUpdateManyMutationInput");
const AttributesWhereInput_1 = require("../../../inputs/AttributesWhereInput");
let UpdateManyAttributesArgs = class UpdateManyAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesUpdateManyMutationInput_1.AttributesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesUpdateManyMutationInput_1.AttributesUpdateManyMutationInput)
], UpdateManyAttributesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereInput_1.AttributesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereInput_1.AttributesWhereInput)
], UpdateManyAttributesArgs.prototype, "where", void 0);
UpdateManyAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAttributesArgs);
exports.UpdateManyAttributesArgs = UpdateManyAttributesArgs;
