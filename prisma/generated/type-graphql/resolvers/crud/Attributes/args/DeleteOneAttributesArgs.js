"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
let DeleteOneAttributesArgs = class DeleteOneAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], DeleteOneAttributesArgs.prototype, "where", void 0);
DeleteOneAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneAttributesArgs);
exports.DeleteOneAttributesArgs = DeleteOneAttributesArgs;
