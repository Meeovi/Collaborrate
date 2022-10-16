"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RatingWhereUniqueInput = class RatingWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingWhereUniqueInput.prototype, "id", void 0);
RatingWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingWhereUniqueInput", {
        isAbstract: true
    })
], RatingWhereUniqueInput);
exports.RatingWhereUniqueInput = RatingWhereUniqueInput;
