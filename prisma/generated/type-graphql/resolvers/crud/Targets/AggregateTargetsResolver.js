"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTargetsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTargetsArgs_1 = require("./args/AggregateTargetsArgs");
const Targets_1 = require("../../../models/Targets");
const AggregateTargets_1 = require("../../outputs/AggregateTargets");
const helpers_1 = require("../../../helpers");
let AggregateTargetsResolver = class AggregateTargetsResolver {
    async aggregateTargets(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTargets_1.AggregateTargets, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTargetsArgs_1.AggregateTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTargetsResolver.prototype, "aggregateTargets", null);
AggregateTargetsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], AggregateTargetsResolver);
exports.AggregateTargetsResolver = AggregateTargetsResolver;
