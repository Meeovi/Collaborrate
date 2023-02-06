"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateContent_typeArgs_1 = require("./args/AggregateContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const AggregateContent_type_1 = require("../../outputs/AggregateContent_type");
const helpers_1 = require("../../../helpers");
let AggregateContent_typeResolver = class AggregateContent_typeResolver {
    async aggregateContent_type(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateContent_type_1.AggregateContent_type, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateContent_typeArgs_1.AggregateContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateContent_typeResolver.prototype, "aggregateContent_type", null);
AggregateContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], AggregateContent_typeResolver);
exports.AggregateContent_typeResolver = AggregateContent_typeResolver;
