"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInternalizationArgs_1 = require("./args/AggregateInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const AggregateInternalization_1 = require("../../outputs/AggregateInternalization");
const helpers_1 = require("../../../helpers");
let AggregateInternalizationResolver = class AggregateInternalizationResolver {
    async aggregateInternalization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInternalization_1.AggregateInternalization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInternalizationArgs_1.AggregateInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateInternalizationResolver.prototype, "aggregateInternalization", null);
AggregateInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], AggregateInternalizationResolver);
exports.AggregateInternalizationResolver = AggregateInternalizationResolver;
