"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosWhereInput_1 = require("../inputs/Credit_memosWhereInput");
let Credit_memosListRelationFilter = class Credit_memosListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], Credit_memosListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], Credit_memosListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], Credit_memosListRelationFilter.prototype, "none", void 0);
Credit_memosListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosListRelationFilter", {
        isAbstract: true
    })
], Credit_memosListRelationFilter);
exports.Credit_memosListRelationFilter = Credit_memosListRelationFilter;
