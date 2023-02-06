"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateStatesArgs_1 = require("./args/AggregateStatesArgs");
const States_1 = require("../../../models/States");
const AggregateStates_1 = require("../../outputs/AggregateStates");
const helpers_1 = require("../../../helpers");
let AggregateStatesResolver = class AggregateStatesResolver {
    async aggregateStates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).states.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStates_1.AggregateStates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStatesArgs_1.AggregateStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateStatesResolver.prototype, "aggregateStates", null);
AggregateStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], AggregateStatesResolver);
exports.AggregateStatesResolver = AggregateStatesResolver;
