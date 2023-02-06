"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesCreateInput_1 = require("../../../inputs/AttributesCreateInput");
let CreateOneAttributesArgs = class CreateOneAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesCreateInput_1.AttributesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesCreateInput_1.AttributesCreateInput)
], CreateOneAttributesArgs.prototype, "data", void 0);
CreateOneAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAttributesArgs);
exports.CreateOneAttributesArgs = CreateOneAttributesArgs;
