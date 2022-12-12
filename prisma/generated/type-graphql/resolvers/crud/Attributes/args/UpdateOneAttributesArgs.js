"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesUpdateInput_1 = require("../../../inputs/AttributesUpdateInput");
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
let UpdateOneAttributesArgs = class UpdateOneAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesUpdateInput_1.AttributesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesUpdateInput_1.AttributesUpdateInput)
], UpdateOneAttributesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], UpdateOneAttributesArgs.prototype, "where", void 0);
UpdateOneAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAttributesArgs);
exports.UpdateOneAttributesArgs = UpdateOneAttributesArgs;
