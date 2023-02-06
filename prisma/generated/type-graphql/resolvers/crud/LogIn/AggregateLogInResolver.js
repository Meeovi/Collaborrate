"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLogInResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLogInArgs_1 = require("./args/AggregateLogInArgs");
const LogIn_1 = require("../../../models/LogIn");
const AggregateLogIn_1 = require("../../outputs/AggregateLogIn");
const helpers_1 = require("../../../helpers");
let AggregateLogInResolver = class AggregateLogInResolver {
    async aggregateLogIn(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLogIn_1.AggregateLogIn, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLogInArgs_1.AggregateLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLogInResolver.prototype, "aggregateLogIn", null);
AggregateLogInResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], AggregateLogInResolver);
exports.AggregateLogInResolver = AggregateLogInResolver;
