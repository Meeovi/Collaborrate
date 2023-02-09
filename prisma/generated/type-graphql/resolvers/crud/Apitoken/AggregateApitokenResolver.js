"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateApitokenArgs_1 = require("./args/AggregateApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const AggregateApitoken_1 = require("../../outputs/AggregateApitoken");
const helpers_1 = require("../../../helpers");
let AggregateApitokenResolver = class AggregateApitokenResolver {
    async aggregateApitoken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateApitoken_1.AggregateApitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateApitokenArgs_1.AggregateApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateApitokenResolver.prototype, "aggregateApitoken", null);
AggregateApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], AggregateApitokenResolver);
exports.AggregateApitokenResolver = AggregateApitokenResolver;
