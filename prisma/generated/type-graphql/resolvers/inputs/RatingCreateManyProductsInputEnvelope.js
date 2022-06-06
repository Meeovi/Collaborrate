"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateManyProductsInput_1 = require("../inputs/RatingCreateManyProductsInput");
let RatingCreateManyProductsInputEnvelope = class RatingCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingCreateManyProductsInput_1.RatingCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RatingCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RatingCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
RatingCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], RatingCreateManyProductsInputEnvelope);
exports.RatingCreateManyProductsInputEnvelope = RatingCreateManyProductsInputEnvelope;
