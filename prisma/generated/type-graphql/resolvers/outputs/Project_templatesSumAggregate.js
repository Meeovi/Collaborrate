"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Project_templatesSumAggregate = class Project_templatesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Project_templatesSumAggregate.prototype, "id", void 0);
Project_templatesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Project_templatesSumAggregate", {
        isAbstract: true
    })
], Project_templatesSumAggregate);
exports.Project_templatesSumAggregate = Project_templatesSumAggregate;
