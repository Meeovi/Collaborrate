"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Gift_certificatesAvgAggregate = class Gift_certificatesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Gift_certificatesAvgAggregate.prototype, "id", void 0);
Gift_certificatesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Gift_certificatesAvgAggregate", {
        isAbstract: true
    })
], Gift_certificatesAvgAggregate);
exports.Gift_certificatesAvgAggregate = Gift_certificatesAvgAggregate;
