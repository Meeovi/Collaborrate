"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAttributesArgs_1 = require("./args/AggregateAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const AggregateAttributes_1 = require("../../outputs/AggregateAttributes");
const helpers_1 = require("../../../helpers");
let AggregateAttributesResolver = class AggregateAttributesResolver {
    async aggregateAttributes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAttributes_1.AggregateAttributes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAttributesArgs_1.AggregateAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAttributesResolver.prototype, "aggregateAttributes", null);
AggregateAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], AggregateAttributesResolver);
exports.AggregateAttributesResolver = AggregateAttributesResolver;
