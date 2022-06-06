"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Email_templatesAvgAggregate = class Email_templatesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Email_templatesAvgAggregate.prototype, "id", void 0);
Email_templatesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Email_templatesAvgAggregate", {
        isAbstract: true
    })
], Email_templatesAvgAggregate);
exports.Email_templatesAvgAggregate = Email_templatesAvgAggregate;
